import { globalIgnores } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import pluginTailwindcss from 'eslint-plugin-tailwindcss'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,vue}'],
  },
  globalIgnores(['**/unpackage/**', '**/uni_modules/**']),
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  ...pluginTailwindcss.configs['flat/recommended'],
  ...pluginOxlint.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // 可以使用any
      'vue/multi-word-component-names': 'off', // 组件名字可以是一个单词
      'tailwindcss/no-custom-classname': 'off', // 可以使用自定义类名
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  skipFormatting,
])
