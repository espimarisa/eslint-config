/* eslint-disable unicorn/no-null */

module.exports = {
  root: true,

  env: {
    es6: true,
    amd: true,
    browser: true,
  },

  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ["unicorn", "import", "prettier"],

  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "plugin:n/recommended",
    "plugin:unicorn/recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "prettier",
  ],

  rules: {
    // Force best practices
    "consistent-this": ["warn", "self"],
    "eqeqeq": ["warn", "smart"],
    "no-lonely-if": "warn",
    "no-unneeded-ternary": "warn",
    "no-var": "error",

    // QOL stuff
    "max-depth": ["warn", 8],
    "max-nested-callbacks": ["warn", 8],

    // Never use Array or Object
    "no-new-object": "warn",
    "no-array-constructor": "warn",

    // Cleans up comments
    "no-inline-comments": "warn",
    "spaced-comment": ["warn", "always"],

    // Force the use of const when not redefined
    "prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: false }],

    // Enables prettier
    "prettier/prettier": "warn",

    // Causes breakage with paths
    "n/no-missing-import": ["off"],

    // This setting is inconsistent
    "unicorn/filename-case": ["off"],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-module": "off",

    // Import order
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: ["type", "internal", "parent", "sibling", "external", "builtin", "index", "object"],
      },
    ],
  },

  // TypeScript support
  overrides: [
    {
      parserOptions: {
        project: ["tsconfig.json"],
        sourceType: "module",
      },

      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",

      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
          typescript: { alwaysTryTypes: true },
        },
      },

      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/typescript",
      ],
      rules: {
        // Allow Type imports
        "n/no-unpublished-import": [
          "error",
          {
            ignoreTypeImport: true,
          },
        ],

        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "no-public",
            overrides: {
              accessors: "explicit",
              methods: "explicit",
            },
          },
        ],

        // Naming convention
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            selector: "default",
            format: ["camelCase"],
          },
          {
            selector: "variableLike",
            format: ["camelCase"],
          },
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
          },
          {
            selector: "parameter",
            format: ["camelCase"],
            leadingUnderscore: "allow",
          },
          {
            selector: "memberLike",
            format: ["camelCase"],
          },
          {
            selector: "memberLike",
            modifiers: ["private"],
            format: ["camelCase"],
            leadingUnderscore: "require",
          },
          {
            selector: "typeParameter",
            format: ["PascalCase"],
            prefix: ["T"],
          },
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: { regex: "^I[A-Z]", match: false },
          },
          {
            selector: "enumMember",
            format: ["UPPER_CASE"],
          },
          {
            selector: "objectLiteralProperty",
            format: null,
          },
          {
            selector: "typeLike",
            format: null,
          },
          {
            selector: "typeAlias",
            format: null,
          },
          {
            selector: "typeProperty",
            format: null,
          },
        ],
      },
    },
  ],
};
