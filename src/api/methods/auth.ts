import type { BaseResponse } from '..'
import { baseAlova } from '..'

export function refreshToken() {
  const method = baseAlova.Get<BaseResponse>(
    '/refresh_token',
  )
  method.meta = { authRole: 'refreshToken' }
  return method
}

export function login() {
  const method = baseAlova.Post<BaseResponse>(
    '/login',
  )
  method.meta = {
    authRole: 'login',
  }
  return method
}

export function logout() {
  const method = baseAlova.Post<BaseResponse>('/logout')
  method.meta = {
    authRole: 'logout',
  }
  return method
}
