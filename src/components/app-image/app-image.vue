<script setup lang="ts">
import type { ComponentInstance } from 'vue'
import type { ImageMode } from '@/uni_modules/wot-design-uni/components/wd-img/types'
import wdImg from '@/uni_modules/wot-design-uni/components/wd-img/wd-img.vue'
import { addUnit } from '@/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  width: string | number
  height: string | number
  radius?: string | number
  round?: boolean
  customClass?: string
  mode?: ImageMode
}>(), {
  radius: 0,
  round: false,
  customClass: '',
  mode: 'aspectFill',
})

const emit = defineEmits(['click', 'load', 'error'])

const width = computed(() => addUnit(props.width))
const height = computed(() => addUnit(props.height))
const radius = computed(() => props.round ? '50%' : addUnit(props.radius))

defineExpose({} as ComponentInstance<typeof wdImg>)
</script>

<script lang="ts">
export default {
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  },
}
</script>

<template>
  <wd-img v-bind="$attrs" :width="width" :height="height" :radius="radius" :mode="mode" :round="round" :custom-class="customClass" @click="emit('click')" @load="emit('load')" @error="emit('error')">
    <template #loading>
      <slot name="loading">
        <wd-skeleton :custom-style="{ borderRadius: radius }" :row-col="[{ width, height }]" animation="gradient" theme="image" />
      </slot>
    </template>
    <template #error>
      <slot name="error">
        <view :style="{ width, height, borderRadius: radius }" class="flex items-center justify-center bg-[#eee]">
          <image src="/static/images/img-err.png" mode="aspectFit" class="size-1/2" />
        </view>
      </slot>
    </template>
  </wd-img>
</template>
