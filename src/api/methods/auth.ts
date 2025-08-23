import { baseAlova } from '..'

export function refreshToken() {
  const method = baseAlova.Get<{ token: string, refresh_token: string }>(
    '/refresh_token',
  )
  method.meta = { authRole: 'refreshToken' }
  return method
}

export function login() {
  const method = baseAlova.Post<{ token: string, refresh_token: string }>(
    '/login',
  )
  method.meta = {
    authRole: 'login',
  }
  return method
}

export function logout() {
  const method = baseAlova.Post('/logout')
  method.meta = {
    authRole: 'logout',
  }
  return method
}
