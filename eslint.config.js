import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    files: ["src/**/*.js"], // Menentukan file mana yang akan dilint
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      // Tambahkan aturan lainnya jika diperlukan
    },
  },
]);
