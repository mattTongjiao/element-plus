import { mount } from '@vue/test-utils'
import Col from '../src/col'
import Row from '../src/row'

describe('Col', () => {
  it('create', () => {
    const wrapper = mount(Col)
    expect(wrapper.classes()).toContain('tj-col')
  })

  it('span', () => {
    const wrapper = mount(Col, {
      props: { span: 12 },
    })
    expect(wrapper.classes()).toContain('tj-col-12')
  })

  it('pull', () => {
    const wrapper = mount(Col, {
      props: { span: 12, pull: 3 },
    })
    expect(wrapper.classes()).toContain('tj-col-pull-3')
  })

  it('push', () => {
    const wrapper = mount(Col, {
      props: { span: 12, push: 3 },
    })
    expect(wrapper.classes()).toContain('tj-col-push-3')
  })

  it('gutter', () => {
    const TestComponent = {
      template: `<tj-row :gutter="20">
      <tj-col :span="12" ref="col"></tj-col>
    </tj-row>`,
      components: {
        'tj-col': Col,
        'tj-row':Row,
      },
    }
    const wrapper = mount(TestComponent)
    const colTjm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(colTjm.style.paddingLeft === '10px').toBe(true)
    expect(colTjm.style.paddingRight === '10px').toBe(true)
  })
  it('responsive', () => {
    const TestComponent = {
      template: `<tj-row :gutter="20">
      <tj-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
      </tj-col>
    </tj-row>`,
      components: {
        'tj-col': Col,
        'tj-row':Row,
      },
    }
    const wrapper = mount(TestComponent)
    const colTjmClass = wrapper.findComponent({ ref: 'col' }).classes()
    expect(colTjmClass.includes('tj-col-sm-4')).toBe(true)
    expect(colTjmClass.includes('tj-col-sm-4')).toBe(true)
    expect(colTjmClass.includes('tj-col-sm-offset-2')).toBe(true)
    expect(colTjmClass.includes('tj-col-lg-6')).toBe(true)
    expect(colTjmClass.includes('tj-col-lg-offset-3')).toBe(true)
    expect(colTjmClass.includes('tj-col-md-8')).toBe(true)
  })
})

describe('Row', () => {
  test('create', () => {
    const wrapper = mount(Row)
    expect(wrapper.classes()).toContain('tj-row')
  })

  test('gutter', () => {
    const wrapper = mount(Row, {
      props: { gutter: 20 },
    })
    const rowTjm = wrapper.element as HTMLElement
    expect(rowTjm.style.marginLeft).toEqual('-10px')
    expect(rowTjm.style.marginRight).toEqual('-10px')
  })
  test('type', () => {
    const wrapper = mount(Row, {
      props: { type: 'flex' },
    })
    expect(wrapper.classes()).toContain('tj-row--flex')
  })
  test('justify', () => {
    const wrapper = mount(Row, {
      props: { justify: 'end' },
    })
    expect(wrapper.classes()).toContain('is-justify-end')
  })
  test('align', () => {
    const wrapper = mount(Row, {
      props: { align: 'bottom' },
    })
    expect(wrapper.classes()).toContain('is-align-bottom')
  })
})

