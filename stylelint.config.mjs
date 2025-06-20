const ignoreAtRules = [
  'tailwind',
  'theme',
  'apply',
  'source',
  'utility',
  'variant',
  'custom-variant',
  'reference',
  'config',
  'plugin',
  'unocss',
]

/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    // https://stylelint.io/user-guide/rules/unit-no-unknown/#ignoreunits-regex-regex-string
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    // https://stylelint.io/user-guide/rules/selector-type-no-unknown/
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page'],
      },
    ],
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules,
      },
    ],
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules,
      },
    ],
  },
}
