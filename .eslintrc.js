module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: { "import/extensions": [
    "error",
    {
      "js": "ignorePackages"
    }
 ],
    semi: ["error", "never"]
  }
};
