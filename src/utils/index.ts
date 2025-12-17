export type ToastType = 'show' | 'success' | 'error' | 'warning' | 'info'

/** 提示 */
export function showToast(msg: string, type: ToastType = 'show') {
  uni.$emit('toast', { msg, type })
}
