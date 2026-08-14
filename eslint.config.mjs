import uniHelper from '@uni-helper/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default uniHelper({
  ignores: ['**/uni_modules/**'],
  stylistic: {
    overrides: {
      'antfu/consistent-list-newline': 'off', // 关闭默认的列表换行规则
      'style/object-curly-newline': ['error', {
        ObjectExpression: {
          multiline: true, // 多行写法括号必须单独一行
          minProperties: 2, // 两个以上属性用多行
          consistent: true, // 风格统一
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2,
          consistent: true,
        },
      }],
      'style/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }], // 不允许多个属性在同一行
    },
  },
  vue: {
    overrides: {
      'no-console': 'off', // 关闭 console 检查
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 2, // 单行最多2个属性
          multiline: 1, // 多行最多1个属性
        },
      ],
    },
  },
  typescript: {
    overrides: {
      'no-console': 'off', // 关闭 console 检查
    },
  },
}, [...tailwindcss.configs['flat/recommended'], {
  settings: {
    tailwindcss: {
      classRegex: '^(.*-)?class$', // class 和 *-class 都开启检查
    },
  },
  rules: {
    'tailwindcss/no-custom-classname': 'off', // 关闭自定义类名检查
  },
}, {
  files: ['pnpm-workspace.yaml'],
  rules: {
    'pnpm/yaml-enforce-settings': 'off', // 关闭 yaml 设置检查
  },
}, {
  files: ['src/config/dict.ts', 'src/config/dict-map.ts'],
  linterOptions: {
    reportUnusedDisableDirectives: 'off',
  },
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
  },
}])
