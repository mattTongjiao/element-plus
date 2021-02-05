import type { App } from 'vue'
import TjAffix from '@element-plus/affix'
import TjAlert from '@element-plus/alert'
import TjAside from '@element-plus/aside'
import TjAutocomplete from '@element-plus/autocomplete'
import TjAvatar from '@element-plus/avatar'
import TjBacktop from '@element-plus/backtop'
import TjBadge from '@element-plus/badge'
import TjBreadcrumb from '@element-plus/breadcrumb'
import TjBreadcrumbItem from '@element-plus/breadcrumb-item'
import TjButton from '@element-plus/button'
import TjButtonGroup from '@element-plus/button-group'
import TjCalendar from '@element-plus/calendar'
import TjCard from '@element-plus/card'
import TjCarousel from '@element-plus/carousel'
import TjCarouselItem from '@element-plus/carousel-item'
import TjCascader from '@element-plus/cascader'
import TjCascaderPanel from '@element-plus/cascader-panel'
import TjCheckbox from '@element-plus/checkbox'
import TjCheckboxButton from '@element-plus/checkbox-button'
import TjCheckboxGroup from '@element-plus/checkbox-group'
import TjCol from '@element-plus/col'
import TjCollapse from '@element-plus/collapse'
import TjCollapseItem from '@element-plus/collapse-item'
import TjCollapseTransition from '@element-plus/collapse-transition'
import TjColorPicker from '@element-plus/color-picker'
import TjContainer from '@element-plus/container'
import TjDatePicker from '@element-plus/date-picker'
import TjDialog from '@element-plus/dialog'
import TjDivider from '@element-plus/divider'
import TjDrawer from '@element-plus/drawer'
import TjDropdown from '@element-plus/dropdown'
import TjDropdownItem from '@element-plus/dropdown-item'
import TjDropdownMenu from '@element-plus/dropdown-menu'
import TjEmpty from '@element-plus/empty'
import TjFooter from '@element-plus/footer'
import TjForm from '@element-plus/form'
import TjFormItem from '@element-plus/form-item'
import TjHeader from '@element-plus/header'
import TjIcon from '@element-plus/icon'
import TjImage from '@element-plus/image'
import TjImageViewer from '@element-plus/image-viewer'
import TjInfiniteScroll from '@element-plus/infinite-scroll'
import TjInput from '@element-plus/input'
import TjInputNumber from '@element-plus/input-number'
import TjLink from '@element-plus/link'
import TjLoading from '@element-plus/loading'
import TjMain from '@element-plus/main'
import TjMenu from '@element-plus/menu'
import TjMenuItem from '@element-plus/menu-item'
import TjMenuItemGroup from '@element-plus/menu-item-group'
import TjMessage from '@element-plus/message'
import TjMessageBox from '@element-plus/message-box'
import TjNotification from '@element-plus/notification'
import TjOption from '@element-plus/option'
import TjOptionGroup from '@element-plus/option-group'
import TjPageHeader from '@element-plus/page-header'
import TjPagination from '@element-plus/pagination'
import TjPopconfirm from '@element-plus/popconfirm'
import TjPopover from '@element-plus/popover'
import TjPopper from '@element-plus/popper'
import TjProgress from '@element-plus/progress'
import TjRadio from '@element-plus/radio'
import TjRadioButton from '@element-plus/radio-button'
import TjRadioGroup from '@element-plus/radio-group'
import TjRate from '@element-plus/rate'
import TjRow from '@element-plus/row'
import TjScrollbar from '@element-plus/scrollbar'
import TjSelect from '@element-plus/select'
import TjSlider from '@element-plus/slider'
import TjStep from '@element-plus/step'
import TjSteps from '@element-plus/steps'
import TjSubmenu from '@element-plus/submenu'
import TjSwitch from '@element-plus/switch'
import TjTabPane from '@element-plus/tab-pane'
import TjTable from '@element-plus/table'
import TjTableColumn from '@element-plus/table-column'
import TjTabs from '@element-plus/tabs'
import TjTag from '@element-plus/tag'
import TjTimePicker from '@element-plus/time-picker'
import TjTimeSelect from '@element-plus/time-select'
import TjTimeline from '@element-plus/timeline'
import TjTimelineItem from '@element-plus/timeline-item'
import TjTooltip from '@element-plus/tooltip'
import TjTransfer from '@element-plus/transfer'
import TjTree from '@element-plus/tree'
import TjUpload from '@element-plus/upload'
import TjVirtualList from '@element-plus/virtual-list'
import TjSpace from '@element-plus/space'
import TjSkeleton from '@element-plus/skeleton'
import TjSkeletonItem from '@element-plus/skeleton-item'
import { use, i18n } from '@element-plus/locale'
// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { version as version_ } from './version'
import type { InstallOptions } from '@element-plus/utils/config'
import { setConfig } from '@element-plus/utils/config'
import isServer from '@element-plus/utils/isServer'
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
