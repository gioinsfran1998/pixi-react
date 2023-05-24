module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'import/no-absolute-path': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
