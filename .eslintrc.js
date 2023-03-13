module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  ignorePatterns: ['/dist', '.*', '/node_modules'],
  overrides: [
    {
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      files: ['*.ts', '*.tsx', '*.d.ts'],
      overrides: [
        {
          files: ['*.spec.ts', '*.spec.tsx'],
          rules: {
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-invalid-this': 'off',
          },
        },
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: [
          'tsconfig.json',
          'tsconfig.build.json',
          'tsconfig.tests.json',
          'cypress/tsconfig.json',
        ],
      },
      plugins: ['@typescript-eslint', 'react', 'react-hooks'],
      rules: {
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            default: {
              memberTypes: [
                // Index signature
                'signature',

                // Fields
                'public-static-field',
                'protected-static-field',
                'private-static-field',

                'public-decorated-field',
                'protected-decorated-field',
                'private-decorated-field',

                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',

                'public-abstract-field',
                'protected-abstract-field',
                'private-abstract-field',

                'public-field',
                'protected-field',
                'private-field',

                'static-field',
                'instance-field',
                'abstract-field',

                'decorated-field',

                'field',

                // Constructors
                'public-constructor',
                'protected-constructor',
                'private-constructor',

                'constructor',

                // Methods
                'public-static-method',
                'protected-static-method',
                'private-static-method',

                'public-decorated-method',
                'protected-decorated-method',
                'private-decorated-method',

                'public-instance-method',
                'protected-instance-method',
                'private-instance-method',

                'public-abstract-method',
                'protected-abstract-method',
                'private-abstract-method',

                'public-method',
                'protected-method',
                'private-method',

                'static-method',
                'instance-method',
                'abstract-method',

                'decorated-method',

                'method',
              ],
              order: 'alphabetically',
            },
          },
        ],
        'import/default': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-named-as-default-member': 'off',
        // 'import/no-named-as-default': 'off',
        // 'import/no-cycle': 'off',
        // 'import/no-unused-modules': 'off',
        // 'import/no-deprecated': 'off',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/consistent-type-assertions': [
          'warn',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
          },
        ],
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { ignoreVoidOperator: true },
        ],
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'warn',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/prefer-return-this-type': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/unified-signatures': 'warn',
        '@typescript-eslint/array-type': 'warn',
        '@typescript-eslint/member-delimiter-style': [
          'warn',
          {
            multiline: {
              delimiter: 'none',
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
            multilineDetection: 'brackets',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'default',
            format: ['camelCase'],
          },
          {
            selector: ['function', 'enumMember', 'property'],
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: ['property'],
            format: ['camelCase', 'PascalCase'],
            modifiers: ['private'],
            leadingUnderscore: 'require',
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'typeProperty',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'objectLiteralProperty',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allowSingleOrDouble',
          },
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
        ],
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-parameter-properties': [
          'error',
          {
            allows: [
              'readonly',
              'private readonly',
              'protected readonly',
              'public readonly',
            ],
          },
        ],
      },
      settings: {
        'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
        'import/external-module-folders': [
          'node_modules',
          'node_modules/@types',
        ],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        'react': {
          version: 'detect',
        },
      },
    },
    {
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-invalid-html-attribute': 'warn',
        'react/no-redundant-should-component-update': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unused-state': 'warn',
        'react/self-closing-comp': 'warn',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-boolean-value': ['warn', 'always'],
        'react/jsx-fragments': 'warn',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-pascal-case': 'warn',
        'react/function-component-definition': [
          'warn',
          {
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/jsx-curly-brace-presence': ['warn', 'never'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import'],
  root: true,
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-cycle': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys': 'warn',
  },
}
