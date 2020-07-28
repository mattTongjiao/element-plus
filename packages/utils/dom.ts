import isServer from './isServer'

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

/* istanbul ignore next */
const trim = function(s: string) {
  return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
/* istanbul ignore next */
const camelCase = function(name: string) {
  return name
    .replace(SPECIAL_CHARS_REGEXP, function(_, __, letter, offset) {
      return offset ? letter.toUpperCase() : letter
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1')
}

/* istanbul ignore next */
export const on = (function() {
  // Since Vue3 does not support < IE11, we don't need to support it as well.
  if (!isServer) {
    return function(
      element: HTMLElement | Document,
      event: string,
      handler: EventListenerOrEventListenerObject,
    ) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  }
})()

/* istanbul ignore next */
export const off = (function() {
  if (!isServer) {
    return function(
      element: HTMLElement,
      event: string,
      handler: EventListenerOrEventListenerObject,
    ) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  }
})()

/* istanbul ignore next */
export const once = function(
  el: HTMLElement,
  event: string,
  fn: EventListener,
) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

/* istanbul ignore next */
export function hasClass(el: HTMLElement, cls: string) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1)
    throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

/* istanbul ignore next */
export function addClass(el: HTMLElement, cls: string) {
  if (!el) return
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/* istanbul ignore next */
export function removeClass(el: HTMLElement, cls: string) {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

/* istanbul ignore next */
// Here I want to use the type CSSStyleDeclaration, but the definition for CSSStyleDeclaration
// has { [index: number]: string } in its type annotation, which does not satisfiy the method
// camelCase(s: string)
// Same as the return type
export const getStyle = function(
  element: HTMLElement,
  styleName: string,
): string {
  if (isServer) return
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

/* istanbul ignore next */
export function setStyle(
  element: HTMLElement,
  styleName: CSSStyleDeclaration | string,
  value: string,
) {
  if (!element || !styleName) return

  if (typeof styleName === 'object') {
    for (const prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)

    element.style[styleName] = value
  }
}

export const isScroll = (el: HTMLElement, isVertical?: Nullable<boolean>) => {
  if (isServer) return

  const determinedDirection = isVertical !== null || isVertical !== undefined
  const overflow = determinedDirection
    ? isVertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow')

  return overflow.match(/(scroll|auto)/)
}

export const getScrollContainer = (
  el: HTMLElement,
  isVertical?: Nullable<boolean>,
) => {
  if (isServer) return
  el.classList
  let parent: HTMLElement = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }
    if (isScroll(parent, isVertical)) {
      return parent
    }
    parent = parent.parentNode as HTMLElement
  }

  return parent
}

export const isInContainer = (el: HTMLElement, container: HTMLElement) => {
  if (isServer || !el || !container) return false

  const elRect = el.getBoundingClientRect()
  let containerRect: Partial<DOMRect>

  if (
    [window, document, document.documentElement, null, undefined].includes(
      container,
    )
  ) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    }
  } else {
    containerRect = container.getBoundingClientRect()
  }

  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  )
}