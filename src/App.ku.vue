<script setup lang="ts">
import type { ToastType } from './utils'
import { useTheme } from '@/composables/useTheme'
import { primaryColor } from '@/config'
import { useToast } from '@/uni_modules/wot-design-uni'

const { theme, themeVars } = useTheme({
  colorTheme: primaryColor,
  colPickerLineColor: primaryColor,
})

const toast = useToast()

uni.$on('toast', ({ msg, type }: { msg: string, type: ToastType }) => {
  toast[type](msg)
})
</script>

<template>
  <wd-config-provider :theme="theme" :theme-vars="themeVars">
    <KuRootView />
    <wd-toast />
  </wd-config-provider>
</template>
