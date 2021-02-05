import { ref } from 'vue'
import useFocus from '../use-focus'

describe('useFocus', () => {
  it('should focus el', async () => {
    const inputTj = document.createElement('input')
    document.body.appendChild(inputTj)

    const reference = ref(inputTj)
    const { focus } = useFocus(reference)

    focus()

    expect(document.activeElement).toBe(inputTj)
  })
})

