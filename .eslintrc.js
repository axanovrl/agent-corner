module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'airbnb',
    'react-app',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  parser: 'babel-eslint',
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true
      }
  },

  rules: {
    'prettier/prettier': ['error']
  }
}