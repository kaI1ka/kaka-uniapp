export const authStore = defineStore('auth', () => {
  const accessToken = ref('')

  return { accessToken }
})
