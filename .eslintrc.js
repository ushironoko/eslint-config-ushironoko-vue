module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/vue',
    'plugin:vue/vue3-recommended',
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
    'ecmaVersion': 2018,
    'warnOnUnsupportedTypeScriptVersion': false,
    'extraFileExtensions': ['.vue']
  },
  'plugins': [
    'prettier',
    '@typescript-eslint'
  ],
  'rules': {
    'quotes': ['error', 'single'],
    '@typescript-eslint/explicit-function-return-type': 0,
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [
          // vue core
          'keep-alive',
          'transition',
          'transition-group',
          'component',
          'slot',

          // vue-router
          'router-link',
          'router-view'
        ]
      }
    ],
  },
}
