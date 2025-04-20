/* ==========================================================================
eslint.config.mjs

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import mocha from "eslint-plugin-mocha";
import globals from "globals";

const IGNORED_FILES = [
  ".*", // Ignores all dotfiles (.prettierrc, .babelrc, etc.)
  "**/*.xml", // Exclude non-JS files like bimi-svg-tiny-ps.xml
  "**/.vscode/**",
  "**/dist/**",
  "**/node_modules/**",
  "**/assets/license/**",
  "**/coverage/**",
  "**/babel.config.json",
  "**/package.json",
  "**/package-lock.json",
  "**/stylelint.config.js",
];

const GLOBALS = {
  ...globals.browser,
  ...globals.node,
  ...globals.mocha,
  self: "readonly",
  location: "readonly",
  indexedDB: "readonly",
};

const ESLINT_RULES = {
  ...eslintConfigPrettier.rules,
  "mocha/no-exclusive-tests": "error",
  "mocha/no-skipped-tests": "warn",
  "mocha/no-hooks-for-single-case": "warn",
  "indent": "off", // Turn off the 'indent' rule, managed by prettier
  "quotes": "off", // Turn off the 'quotes' rule, managed by prettier
  "semi": "off", // Turn off the 'semi' rule, managed by prettier
};

export default [
  js.configs.recommended,
  {
    files: ["**/*.mjs", "**/*.js", "**/*.cjs", "**/test/**/*.mjs"],
    ignores: IGNORED_FILES,
    plugins: { mocha },
    languageOptions: {
      globals: GLOBALS,
      ecmaVersion: "latest", // Auto-upgrade ECMAScript version
      sourceType: "module",
    },
    rules: ESLINT_RULES,
  },
  eslintConfigPrettier,
];
