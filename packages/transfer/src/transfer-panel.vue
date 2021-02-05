<template>
  <div class="tj-transfer-panel">
    <p class="tj-transfer-panel__header">
      <tj-checkbox
        v-model="allChecked"
        :indeterminate="isIndeterminate"
        @change="handleAllCheckedChange"
      >
        {{ title }}
        <span>{{ checkedSummary }}</span>
      </tj-checkbox>
    </p>

    <div
      :class="['tj-transfer-panel__body', hasFooter ? 'is-with-footer' : '']"
    >
      <tj-input
        v-if="filterable"
        v-model="query"
        class="tj-transfer-panel__filter"
        size="small"
        :placeholder="placeholder"
        @mouseenter="inputHover = true"
        @mouseleave="inputHover = false"
      >
        <template #prefix>
          <i
            :class="['tj-input__icon', 'tj-icon-' + inputIcon]"
            @click="clearQuery"
          ></i>
        </template>
      </tj-input>
      <tj-checkbox-group
        v-show="!hasNoMatch && data.length > 0"
        v-model="checked"
        :class="{ 'is-filterable': filterable }"
        class="tj-transfer-panel__list"
      >
        <tj-checkbox
          v-for="item in filteredData"
          :key="item[keyProp]"
          class="tj-transfer-panel__item"
          :label="item[keyProp]"
          :disabled="item[disabledProp]"
        >
          <option-content :option="optionRender(item)" />
        </tj-checkbox>
      </tj-checkbox-group>
      <p
        v-show="hasNoMatch || data.length === 0"
        class="tj-transfer-panel__empty"
      >
        {{ hasNoMatch ? t('el.transfer.noMatch') : t('el.transfer.noData') }}
      </p>
    </div>
    <p v-if="hasFooter" class="tj-transfer-panel__footer">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { t } from '@tongjiaoui-plus/locale'
import TjCheckbox from '@tongjiaoui-plus/checkbox'
import TjCheckboxGroup from '@tongjiaoui-plus/checkbox-group'
import TjInput from '@tongjiaoui-plus/input'
import { useCheck, CHECKED_CHANGE_EVENT } from './useCheck'

export default defineComponent({
  name: 'TjTransferPanel',

  components: {
    TjCheckboxGroup,
    TjCheckbox,
    TjInput,
    OptionContent: ({ option }) => option,
  },

  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    optionRender: Function,
    placeholder: String,
    title: String,
    filterable: Boolean,
    format: Object,
    filterMethod: Function,
    defaultChecked: Array,
    props: Object,
  },

  emits: [CHECKED_CHANGE_EVENT],

  setup(props, { emit, slots }) {
    const panelState = reactive({
      checked: [],
      allChecked: false,
      query: '',
      inputHover: false,
      checkChangeByUser: true,
    })

    const {
      labelProp,
      keyProp,
      disabledProp,
      filteredData,
      checkedSummary,
      isIndeterminate,
      handleAllCheckedChange,
    } = useCheck(props, panelState, emit)

    const hasNoMatch = computed(() => {
      return panelState.query.length > 0 && filteredData.value.length === 0
    })

    const inputIcon = computed(() => {
      return panelState.query.length > 0 && panelState.inputHover
        ? 'circle-close'
        : 'search'
    })

    const hasFooter = computed(() => !!slots.default()[0].children.length)

    const clearQuery = () => {
      if (inputIcon.value === 'circle-close') {
        panelState.query = ''
      }
    }

    const {
      checked,
      allChecked,
      query,
      inputHover,
      checkChangeByUser,
    } = toRefs(panelState)

    return {
      labelProp,
      keyProp,
      disabledProp,
      filteredData,
      checkedSummary,
      isIndeterminate,
      handleAllCheckedChange,

      checked,
      allChecked,
      query,
      inputHover,
      checkChangeByUser,

      hasNoMatch,
      inputIcon,
      hasFooter,
      clearQuery,

      t,
    }
  },
})
</script>
