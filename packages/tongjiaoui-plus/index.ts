import type { App } from 'vue'
import TjAffix from '@tongjiaoui-plus/affix'
import TjAlert from '@tongjiaoui-plus/alert'
import TjAside from '@tongjiaoui-plus/aside'
import TjAutocomplete from '@tongjiaoui-plus/autocomplete'
import TjAvatar from '@tongjiaoui-plus/avatar'
import TjBacktop from '@tongjiaoui-plus/backtop'
import TjBadge from '@tongjiaoui-plus/badge'
import TjBreadcrumb from '@tongjiaoui-plus/breadcrumb'
import TjBreadcrumbItem from '@tongjiaoui-plus/breadcrumb-item'
import TjButton from '@tongjiaoui-plus/button'
import TjButtonGroup from '@tongjiaoui-plus/button-group'
import TjCalendar from '@tongjiaoui-plus/calendar'
import TjCard from '@tongjiaoui-plus/card'
import TjCarousel from '@tongjiaoui-plus/carousel'
import TjCarouselItem from '@tongjiaoui-plus/carousel-item'
import TjCascader from '@tongjiaoui-plus/cascader'
import TjCascaderPanel from '@tongjiaoui-plus/cascader-panel'
import TjCheckbox from '@tongjiaoui-plus/checkbox'
import TjCheckboxButton from '@tongjiaoui-plus/checkbox-button'
import TjCheckboxGroup from '@tongjiaoui-plus/checkbox-group'
import TjCol from '@tongjiaoui-plus/col'
import TjCollapse from '@tongjiaoui-plus/collapse'
import TjCollapseItem from '@tongjiaoui-plus/collapse-item'
import TjCollapseTransition from '@tongjiaoui-plus/collapse-transition'
import TjColorPicker from '@tongjiaoui-plus/color-picker'
import TjContainer from '@tongjiaoui-plus/container'
import TjDatePicker from '@tongjiaoui-plus/date-picker'
import TjDialog from '@tongjiaoui-plus/dialog'
import TjDivider from '@tongjiaoui-plus/divider'
import TjDrawer from '@tongjiaoui-plus/drawer'
import TjDropdown from '@tongjiaoui-plus/dropdown'
import TjDropdownItem from '@tongjiaoui-plus/dropdown-item'
import TjDropdownMenu from '@tongjiaoui-plus/dropdown-menu'
import TjEmpty from '@tongjiaoui-plus/empty'
import TjFooter from '@tongjiaoui-plus/footer'
import TjForm from '@tongjiaoui-plus/form'
import TjFormItem from '@tongjiaoui-plus/form-item'
import TjHeader from '@tongjiaoui-plus/header'
import TjIcon from '@tongjiaoui-plus/icon'
import TjImage from '@tongjiaoui-plus/image'
import TjImageViewer from '@tongjiaoui-plus/image-viewer'
import TjInfiniteScroll from '@tongjiaoui-plus/infinite-scroll'
import TjInput from '@tongjiaoui-plus/input'
import TjInputNumber from '@tongjiaoui-plus/input-number'
import TjLink from '@tongjiaoui-plus/link'
import TjLoading from '@tongjiaoui-plus/loading'
import TjMain from '@tongjiaoui-plus/main'
import TjMenu from '@tongjiaoui-plus/menu'
import TjMenuItem from '@tongjiaoui-plus/menu-item'
import TjMenuItemGroup from '@tongjiaoui-plus/menu-item-group'
import TjMessage from '@tongjiaoui-plus/message'
import TjMessageBox from '@tongjiaoui-plus/message-box'
import TjNotification from '@tongjiaoui-plus/notification'
import TjOption from '@tongjiaoui-plus/option'
import TjOptionGroup from '@tongjiaoui-plus/option-group'
import TjPageHeader from '@tongjiaoui-plus/page-header'
import TjPagination from '@tongjiaoui-plus/pagination'
import TjPopconfirm from '@tongjiaoui-plus/popconfirm'
import TjPopover from '@tongjiaoui-plus/popover'
import TjPopper from '@tongjiaoui-plus/popper'
import TjProgress from '@tongjiaoui-plus/progress'
import TjRadio from '@tongjiaoui-plus/radio'
import TjRadioButton from '@tongjiaoui-plus/radio-button'
import TjRadioGroup from '@tongjiaoui-plus/radio-group'
import TjRate from '@tongjiaoui-plus/rate'
import TjRow from '@tongjiaoui-plus/row'
import TjScrollbar from '@tongjiaoui-plus/scrollbar'
import TjSelect from '@tongjiaoui-plus/select'
import TjSlider from '@tongjiaoui-plus/slider'
import TjStep from '@tongjiaoui-plus/step'
import TjSteps from '@tongjiaoui-plus/steps'
import TjSubmenu from '@tongjiaoui-plus/submenu'
import TjSwitch from '@tongjiaoui-plus/switch'
import TjTabPane from '@tongjiaoui-plus/tab-pane'
import TjTable from '@tongjiaoui-plus/table'
import TjTableColumn from '@tongjiaoui-plus/table-column'
import TjTabs from '@tongjiaoui-plus/tabs'
import TjTag from '@tongjiaoui-plus/tag'
import TjTimePicker from '@tongjiaoui-plus/time-picker'
import TjTimeSelect from '@tongjiaoui-plus/time-select'
import TjTimeline from '@tongjiaoui-plus/timeline'
import TjTimelineItem from '@tongjiaoui-plus/timeline-item'
import TjTooltip from '@tongjiaoui-plus/tooltip'
import TjTransfer from '@tongjiaoui-plus/transfer'
import TjTree from '@tongjiaoui-plus/tree'
import TjUpload from '@tongjiaoui-plus/upload'
import TjVirtualList from '@tongjiaoui-plus/virtual-list'
import TjSpace from '@tongjiaoui-plus/space'
import TjSkeleton from '@tongjiaoui-plus/skeleton'
import TjSkeletonItem from '@tongjiaoui-plus/skeleton-item'
import { use, i18n } from '@tongjiaoui-plus/locale'
// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { version as version_ } from './version'
import type { InstallOptions } from '@tongjiaoui-plus/utils/config'
import { setConfig } from '@tongjiaoui-plus/utils/config'
import isServer from '@tongjiaoui-plus/utils/isServer'
import dayjs from 'dayjs'

// expose Day.js to window to make full bundle i18n work
if (!isServer && !(window as any).dayjs) {
  (window as any).dayjs = dayjs
}

const version = version_ // version_ to fix tsc issue

const locale = use

const defaultInstallOpt: InstallOptions = {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  TjAffix,
  TjAlert,
  TjAside,
  TjAutocomplete,
  TjAvatar,
  TjBacktop,
  TjBadge,
  TjBreadcrumb,
  TjBreadcrumbItem,
  TjButton,
  TjButtonGroup,
  TjCalendar,
  TjCard,
  TjCarousel,
  TjCarouselItem,
  TjCascader,
  TjCascaderPanel,
  TjCheckbox,
  TjCheckboxButton,
  TjCheckboxGroup,
  TjCol,
  TjCollapse,
  TjCollapseItem,
  TjCollapseTransition,
  TjColorPicker,
  TjContainer,
  TjDatePicker,
  TjDialog,
  TjDivider,
  TjDrawer,
  TjDropdown,
  TjDropdownItem,
  TjDropdownMenu,
  TjEmpty,
  TjFooter,
  TjForm,
  TjFormItem,
  TjHeader,
  TjIcon,
  TjImage,
  TjImageViewer,
  TjInput,
  TjInputNumber,
  TjLink,
  TjMain,
  TjMenu,
  TjMenuItem,
  TjMenuItemGroup,
  TjOption,
  TjOptionGroup,
  TjPageHeader,
  TjPagination,
  TjPopconfirm,
  TjPopover,
  TjPopper,
  TjProgress,
  TjRadio,
  TjRadioButton,
  TjRadioGroup,
  TjRate,
  TjRow,
  TjScrollbar,
  TjSelect,
  TjSlider,
  TjStep,
  TjSteps,
  TjSubmenu,
  TjSwitch,
  TjTabPane,
  TjTable,
  TjTableColumn,
  TjTabs,
  TjTag,
  TjTimePicker,
  TjTimeSelect,
  TjTimeline,
  TjTimelineItem,
  TjTooltip,
  TjTransfer,
  TjTree,
  TjUpload,
  TjVirtualList,
  TjSpace,
  TjSkeleton,
  TjSkeletonItem,
]

const plugins = [
  TjInfiniteScroll,
  TjLoading,
  TjMessage,
  TjMessageBox,
  TjNotification,
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  locale(option.locale)
  if (option.i18n) {
    i18n(option.i18n)
  }
  app.config.globalProperties.$ELEMENT = option
  setConfig(option)

  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin as any)
  })
}

export {
  TjAffix,
  TjAlert,
  TjAside,
  TjAutocomplete,
  TjAvatar,
  TjBacktop,
  TjBadge,
  TjBreadcrumb,
  TjBreadcrumbItem,
  TjButton,
  TjButtonGroup,
  TjCalendar,
  TjCard,
  TjCarousel,
  TjCarouselItem,
  TjCascader,
  TjCascaderPanel,
  TjCheckbox,
  TjCheckboxButton,
  TjCheckboxGroup,
  TjCol,
  TjCollapse,
  TjCollapseItem,
  TjCollapseTransition,
  TjColorPicker,
  TjContainer,
  TjDatePicker,
  TjDialog,
  TjDivider,
  TjDrawer,
  TjDropdown,
  TjDropdownItem,
  TjDropdownMenu,
  TjEmpty,
  TjFooter,
  TjForm,
  TjFormItem,
  TjHeader,
  TjIcon,
  TjImage,
  TjImageViewer,
  TjInfiniteScroll,
  TjInput,
  TjInputNumber,
  TjLink,
  TjLoading,
  TjMain,
  TjMenu,
  TjMenuItem,
  TjMenuItemGroup,
  TjMessage,
  TjMessageBox,
  TjNotification,
  TjOption,
  TjOptionGroup,
  TjPageHeader,
  TjPagination,
  TjPopconfirm,
  TjPopover,
  TjPopper,
  TjProgress,
  TjRadio,
  TjRadioButton,
  TjRadioGroup,
  TjRate,
  TjRow,
  TjScrollbar,
  TjSelect,
  TjSlider,
  TjStep,
  TjSteps,
  TjSubmenu,
  TjSwitch,
  TjTabPane,
  TjTable,
  TjTableColumn,
  TjTabs,
  TjTag,
  TjTimePicker,
  TjTimeSelect,
  TjTimeline,
  TjTimelineItem,
  TjTooltip,
  TjTransfer,
  TjTree,
  TjUpload,
  TjVirtualList,
  TjSpace,
  TjSkeleton,
  TjSkeletonItem,
  version,
  install,
  locale,
}

export default {
  version,
  install,
}
