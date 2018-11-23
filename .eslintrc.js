module.exports = {
  root: true,
  parserOptions: {
    'parser': 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'vue/html-closing-bracket-spacing': [2, {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/html-closing-bracket-newline': [2, {'multiline': 'never'}],
    'space-before-function-paren': [2, 'never'],
    'no-return-assign': 'off',
    semi: [2, 'always']
  },
  globals: {
    ga: 'ga'
  }
}
