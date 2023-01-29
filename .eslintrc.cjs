module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',
    'no-unneeded-ternary': 'off',
    camelcase: 'off',
    'multiline-ternary': 'off'
  }
}
