import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

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
}, [...tailwindcss.configs['flat/recommended'], {
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
}])
