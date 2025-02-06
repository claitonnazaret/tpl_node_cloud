import globals, { es2021, node } from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config} */
export default {
  files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  languageOptions: {
    globals: globals.node,
  },
  env: {
    es2021,
    node,
    jest, // Habilita as variáveis globais do Jest
  },
  parserOptions: {
    ecmaVersion: 'latest', // Suporta a versão mais recente do ECMAScript
    sourceType: 'module', // Permite o uso de imports/exports
    project: './tsconfig.json', // Define o arquivo de configuração do TypeScript
  },
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    prettier, // Desativa regras que conflitam com Prettier
  ],
  rules: {
    'prettier/prettier': 'error', // Garante que o código siga as regras do Prettier
  },
  plugins: ['prettier'], // Adiciona o plugin do Prettier
}
