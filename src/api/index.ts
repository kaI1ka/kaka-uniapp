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
      // @ts-expect-error uniapp基本响应类型
      if (response.header) {
        const res = (response as UniNamespace.RequestSuccessCallbackResult).data as BaseResponse<any>
        return res
      }
      // @ts-expect-error uniapp上传文件响应类型
      else if (response.data) {
        const res = (response as UniNamespace.UploadFileSuccessCallbackResult).data
        try {
          const uploadRes = JSON.parse(res) as BaseResponse<any>
          return uploadRes
        }
        catch (error: any) {
          throw new Error(error)
        }
      }
      else {
        const downloadRes = response as UniNamespace.DownloadSuccessData
        return downloadRes
      }
    },
    onError(error) {
      console.log('请求失败', error)
      showToast('请求失败')
      throw new Error(error)
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
