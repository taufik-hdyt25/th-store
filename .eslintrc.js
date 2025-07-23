module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // ✅ penting untuk TypeScript
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "unused-imports"],
  rules: {
    "@typescript-eslint/no-explicit-any": "warn", // ✅ ini akan aktif kalau plugin-nya terinstall
    "@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@next/next/no-html-link-for-pages": "off",
  },
};
