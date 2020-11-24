module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  extends: ['eslint:recommended', 'prettier', 'prettier/react'],
  root: true,
  rules: {
    semi: [2, 'always', {omitLastInOneLineBlock: true}],
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': 2,
    'react/no-did-update-set-state': ['off'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-key': 'error',
    'react/prop-types': 'error',
    'no-use-before-define': ['error', {functions: false}],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
