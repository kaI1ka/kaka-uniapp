import { createAlova } from 'alova'
import AdapterUniapp, { uniappRequestAdapter } from '@alova/adapter-uniapp'
import { createServerTokenAuthentication } from 'alova/client'
import vueHook from 'alova/vue'
import { refreshToken } from './methods/auth'

const { onAuthRequired, onResponseRefreshToken } =
  createServerTokenAuthentication<typeof vueHook, typeof uniappRequestAdapter>({
    refreshTokenOnSuccess: {
      // 响应时触发，可获取到response和method，并返回boolean表示token是否过期
      // 当服务端返回401时，表示token过期
      isExpired: (response) => {
        return response.statusCode === 401
      },
      // 当token过期时触发，在此函数中触发刷新token
      handler: async () => {
        try {
          const { token, refresh_token } = await refreshToken()
          uni.setStorageSync('token', token)
          uni.setStorageSync('refresh_token', refresh_token)
        } catch (error) {
          // 处理token刷新失败，比如跳转回登录页或者其他操作
          uni.navigateTo({
            url: '/pages/index/index',
          })
          // 并抛出错误
          throw error
        }
      },
    },
    // 登录保存token
    login(response, _method) {
      const { data } = response as UniNamespace.RequestSuccessCallbackResult
      const { token, refresh_token } = data as Record<string, any>
      uni.setStorageSync('token', token)
      uni.setStorageSync('refresh_token', refresh_token)
    },
    // 请求前加上token
    assignToken: (method) => {
      method.config.headers.Authorization = uni.getStorageSync('token')
    },
    // 退出登录删除数据
    logout(_response, _method) {
      uni.removeStorageSync('token')
      uni.removeStorageSync('refresh_token')
    },
  })

export const baseAlova = createAlova({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  ...AdapterUniapp(),
  beforeRequest: onAuthRequired((_method) => {
    // 请求拦截器
  }),
  responded: onResponseRefreshToken({
    onSuccess(response, _method) {
      if ('header' in response) {
        const { data } = response as UniNamespace.RequestSuccessCallbackResult
        return data
      } else {
        return response
      }
    },
    onError(error) {
      console.log(error)
      // 处理请求失败逻辑
    },
    onComplete(_method) {
      // 处理请求完成逻辑
    },
  }),
})
