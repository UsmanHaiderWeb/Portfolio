module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    // This project does not use prop-types.
    'react/prop-types': 'off',
    // React Three Fiber renders three.js objects as JSX; their props (args,
    // attach, vertexShader, frustumCulled, ...) are not DOM attributes.
    'react/no-unknown-property': 'off',
    // memo()-wrapped default exports + co-located subcomponents are intentional.
    'react-refresh/only-export-components': 'off',
  },
}
