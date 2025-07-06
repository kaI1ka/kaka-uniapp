import { baseAlova } from '..'

export const refreshToken = () => {
  const method = baseAlova.Get<{ token: string; refresh_token: string }>(
    '/refresh_token',
  )
  method.meta = { authRole: 'refreshToken' }
  return method
}

export const login = () => {
  const method = baseAlova.Post<{ token: string; refresh_token: string }>(
    '/login',
  )
  method.meta = {
    authRole: 'login',
  }
  return method
}

export const logout = () => {
  const method = baseAlova.Post('/logout')
  method.meta = {
    authRole: 'logout',
  }
  return method
}
