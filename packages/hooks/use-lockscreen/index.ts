import { watch, isRef } from 'vue'

import getScrollBarWidth from '@tongjiaoui-plus/utils/scrollbar-width'
import throwError from '@tongjiaoui-plus/utils/error'
import {
  addClass,
  removeClass,
  hasClass,
  getStyle,
} from '@tongjiaoui-plus/utils/dom'

import type { Ref } from 'vue'

/**
 * Hook that monitoring the ref value to lock or unlock the screen.
 * When the trigger became true, it assumes modal is now opened and vice versa.
 * @param trigger {Ref<boolean>}
 */
export default (trigger: Ref<boolean>) => {
  if (!isRef(trigger)) {
    throwError(
      '[useLockScreen]',
      'You need to pass a ref param to this function',
    )
  }
  let scrollBarWidth = 0
  let withoutHiddenClass = false
  let bodyPaddingRight = '0'
  let computedBodyPaddingRight = 0
  watch(trigger, val => {
    if (val) {
      withoutHiddenClass = !hasClass(document.body, 'tj-popup-parent--hidden')
      if (withoutHiddenClass) {
        bodyPaddingRight = document.body.style.paddingRight
        computedBodyPaddingRight = parseInt(
          getStyle(document.body, 'paddingRight'),
          10,
        )
      }
      scrollBarWidth = getScrollBarWidth()
      const bodyHasOverflow =
        document.documentElement.clientHeight < document.body.scrollHeight
      const bodyOverflowY = getStyle(document.body, 'overflowY')
      if (
        scrollBarWidth > 0 &&
        (bodyHasOverflow || bodyOverflowY === 'scroll') &&
        withoutHiddenClass
      ) {
        document.body.style.paddingRight =
          computedBodyPaddingRight + scrollBarWidth + 'px'
      }
      addClass(document.body, 'tj-popup-parent--hidden')
    } else {
      if (withoutHiddenClass) {
        document.body.style.paddingRight = bodyPaddingRight
        removeClass(document.body, 'tj-popup-parent--hidden')
      }
      withoutHiddenClass = true
    }
  })
}
