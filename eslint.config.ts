import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
    plugins: { js, prettier: prettierPlugin },
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': ['error'],
    },
  },

  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
])
