import { nextTick } from 'vue'
import { isFunction } from '@vue/shared'
import throttle from 'lodash/throttle'
import { entries } from '@element-plus/utils/util'
import { getScrollContainer, getOffsetTopDistance } from '@element-plus/utils/dom'
import throwError from '@element-plus/utils/error'
import type { ObjectDirective, ComponentPublicInstance } from 'vue'

export const SCOPE = 'TjInfiniteScroll'
export const CHECK_INTERVAL = 50
export const DEFAULT_DELAY = 200
export const DEFAULT_DISTANCE = 0

const attributes = {
  delay: {
    type: Number,
    default: DEFAULT_DELAY,
  },
  distance: {
    type: Number,
    default: DEFAULT_DISTANCE,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  immediate: {
    type: Boolean,
    default: true,
  },
}

type Attrs = typeof attributes
type ScrollOptions = { [K in keyof Attrs]: Attrs[K]['default'] }
type InfiniteScrollCallback = () => void
type InfiniteScrollTj = HTMLElement & {
  [SCOPE]: {
    container: HTMLElement | Window
    containerTj: HTMLElement
    instance: ComponentPublicInstance
    delay: number // export for test
    lastScrollTop: number
    cb: InfiniteScrollCallback
    onScroll: () => void
    observer?: MutationObserver
  }
}

const getScrollOptions = (el: HTMLElement, instance: ComponentPublicInstance): ScrollOptions => {
  return entries(attributes)
    .reduce((acm, [name, option]) => {
      const { type, default: defaultValue } = option
      const attrVal = el.getAttribute(`infinite-scroll-${name}`)
      let value = instance[attrVal] ?? attrVal ?? defaultValue
      value = value === 'false' ? false : value
      value = type(value)
      acm[name] = Number.isNaN(value) ? defaultValue : value
      return acm
    }, {} as ScrollOptions)
}

const destroyObserver = (el: InfiniteScrollTj) => {
  const { observer } = el[SCOPE]

  if (observer) {
    observer.disconnect()
    delete el[SCOPE].observer
  }
}

const handleScroll = (el: InfiniteScrollTj, cb: InfiniteScrollCallback) => {
  const {
    container, containerTj,
    instance, observer,
    lastScrollTop,
  } = el[SCOPE]
  const { disabled, distance } = getScrollOptions(el, instance)
  const { clientHeight, scrollHeight, scrollTop } = containerTj
  const delta = scrollTop - lastScrollTop

  el[SCOPE].lastScrollTop = scrollTop

  // trigger only if full check has done and not disabled and scroll down
  if (observer || disabled || delta < 0 ) return

  let shouldTrigger = false

  if (container === el) {
    shouldTrigger = scrollHeight - (clientHeight + scrollTop) <= distance
  } else {
    // get the scrollHeight since el might be visible overflow
    const { clientTop, scrollHeight: height } = el
    const offsetTop = getOffsetTopDistance(el, containerTj)
    shouldTrigger = scrollTop + clientHeight >= offsetTop + clientTop + height - distance
  }

  if (shouldTrigger) {
    cb.call(instance)
  }
}

function checkFull(el: InfiniteScrollTj, cb: InfiniteScrollCallback) {
  const { containerTj, instance } = el[SCOPE]
  const { disabled } = getScrollOptions(el, instance)

  if (disabled) return

  if (containerTj.scrollHeight <= containerTj.clientHeight) {
    cb.call(instance)
  } else {
    destroyObserver(el)
  }
}

const InfiniteScroll: ObjectDirective<InfiniteScrollTj, InfiniteScrollCallback> = {
  async mounted(el, binding) {
    const { instance, value: cb } = binding

    if (!isFunction(cb)) {
      throwError(SCOPE, '\'v-infinite-scroll\' binding value must be a function')
    }

    // ensure parentNode mounted
    await nextTick()

    const { delay, immediate } = getScrollOptions(el, instance)
    const container = getScrollContainer(el, true)
    const containerTj = container === window ? document.documentElement : (container as HTMLElement)
    const onScroll = throttle(handleScroll.bind(null, el, cb), delay)

    if (!container) return

    el[SCOPE] = {
      instance, container, containerTj,
      delay, cb, onScroll,
      lastScrollTop: containerTj.scrollTop,
    }

    if (immediate) {
      const observer = new MutationObserver(throttle(checkFull.bind(null, el, cb), CHECK_INTERVAL))
      el[SCOPE].observer = observer
      observer.observe(el, { childList: true, subtree: true })
      checkFull(el, cb)
    }

    container.addEventListener('scroll', onScroll)
  },
  unmounted(el) {
    const { container, onScroll } = el[SCOPE]

    container?.removeEventListener('scroll', onScroll)
    destroyObserver(el)
  },
}

export default InfiniteScroll
