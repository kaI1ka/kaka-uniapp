import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    overrides: {
      'no-console': 'off',
    },
  },
  typescript: {
    overrides: {
      'no-console': 'off',
    },
  },
})
