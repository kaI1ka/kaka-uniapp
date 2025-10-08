import AdapterUniapp from '@alova/adapter-uniapp'
import { createAlova } from 'alova'
import { useLoading } from '@/composables/useLoading'
import { showToast } from '@/utils'

const { showLoading, hideLoading } = useLoading()

export const baseAlova = createAlova({
  baseURL: import.meta.env.VITE_API_URL,
  ...AdapterUniapp(),
  beforeRequest(method) {
    if (method.meta?.loading) {
      showLoading()
    }
    console.log('请求信息', method)
  },
  responded: {
    onSuccess(response) {
      console.log('响应信息', response)
    },
    onError(error) {
      console.log('请求失败', error)
      showToast('请求失败')
    },
    onComplete(method) {
      if (method.meta?.loading) {
        hideLoading()
      }
    },
  },
})

/** 基础响应类型 */
export interface BaseResponse<T = any> {
  code: number
  message: string
  data: T
}
