const js = require("@eslint/js");
const react = require("eslint-plugin-react");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
    },
    plugins: {
      react,
    },
    rules: {
      "no-undef": ["warn", { typeof: false }],
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/__test__/**/*.{js,jsx}", "**/*.test.{js,jsx}"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
      },
    },
  },
];
