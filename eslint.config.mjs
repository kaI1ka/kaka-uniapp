import uniHelper from '@uni-helper/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default uniHelper({
  ignores: ['**/uni_modules/**'],
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
