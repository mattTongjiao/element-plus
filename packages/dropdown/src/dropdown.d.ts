import {
  ComponentInternalInstance,
  ComputedRef,
  Ref,
} from 'vue'

export interface ITjDropdownInstance {
  instance?: ComponentInternalInstance
  dropdownSize?: ComputedRef<string>
  visible?: Ref<boolean>
  handleClick?: () => void
  commandHandler?: (...arg) => void
  show?: () => void
  hide?:  () => void
  trigger?: ComputedRef<string>
  hideOnClick?: ComputedRef<boolean>
  triggerTjm?: ComputedRef<Nullable<HTMLButtonElement>>
}
