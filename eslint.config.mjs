import { defineConfig } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import pluginTailwind from 'eslint-plugin-tailwindcss'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import oxlint from 'eslint-plugin-oxlint'

export default defineConfig([
  {
    ignores: ['src/uni_modules/**'],
  },
  ...pluginVue.configs['flat/recommended'],
  ...pluginTailwind.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-useless-v-bind': [
        'error',
        {
          ignoreIncludesComment: false,
          ignoreStringEscape: false,
        },
      ],
    },
  },
  {
    files: ['*.vue', '**/*.vue'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  ...oxlint.buildFromOxlintConfigFile('./.oxlintrc.json'),
  eslintConfigPrettier,
])
