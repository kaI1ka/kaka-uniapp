const _loading = customRef((track, trigger) => {
  let loadingCount = 0
  return {
    get() {
      track()
      return loadingCount > 0
    },
    set(value: boolean) {
      loadingCount += value ? 1 : -1
      loadingCount = Math.max(0, loadingCount)
      trigger()
    },
  }
})

const loading = readonly(_loading)

watch(loading, (newVal) => {
  if (newVal) {
    uni.showLoading()
  }
  else {
    uni.hideLoading()
  }
})

export function useLoading() {
  function showLoading() {
    _loading.value = true
  }
  function hideLoading() {
    _loading.value = false
  }
  return { loading, showLoading, hideLoading }
}
