import { defineConfig } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import pluginTailwindcss from 'eslint-plugin-tailwindcss'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import oxlint from 'eslint-plugin-oxlint'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
  {
    ignores: ['src/uni_modules/**', 'dist/'],
  },
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...pluginTailwindcss.configs['flat/recommended'],
  { rules: { '@typescript-eslint/no-explicit-any': 'off' } },
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-useless-v-bind': [
        'error',
        {
          ignoreIncludesComment: false,
          ignoreStringEscape: false,
        },
      ],
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  ...oxlint.buildFromOxlintConfigFile('./.oxlintrc.json'),
  eslintConfigPrettier,
])
