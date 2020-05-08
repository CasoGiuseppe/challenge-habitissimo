module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "no-unused-vars": "off",
    "max-len": "off",
    "camelcase": "off",
    "no-nested-ternary": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "consistent-return": "off",
    "no-restricted-syntax": ["error", "BinaryExpression[operator='in']"],
    "prefer-const": "off",
    "template-curly-spacing" : "off",
    "indent" : "off",
    "arrow-body-style": "off",
    "func-names": "off",
    "no-unused-expressions": "off",
    "prefer-destructuring": "off",
    "guard-for-in": "off",
    "no-return-assign": "off"
  },
};
