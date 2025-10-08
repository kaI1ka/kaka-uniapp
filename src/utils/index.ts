export type ToastType = 'show' | 'success' | 'error' | 'warning' | 'info'

/** 提示 */
export function showToast(msg: string, type: ToastType = 'show') {
  uni.$emit('toast', { msg, type })
}

/** 对num自动填充px */
export function addUnit(num: number | string) {
  return Number.isNaN(Number(num)) ? `${num}` : `${num}px`
}
