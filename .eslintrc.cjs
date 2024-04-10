module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'filenames'],
  rules: {
    'react/jsx-no-target-blank': 'off',  //  JSX에서 target="_blank"를 사용해도 에러가 뜨는것을 방지, 하지만 rel="noopener noreferrer" 같이 쓰는것을 권장
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // add rules ------------------------------
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "no-new-object": "error",
    "object-curly-newline": ["error", { "ObjectExpression": "always", "ObjectPattern": "never" }],
    "quote-props": ["error", "always"],
    "object-shorthand": ["error", "always", { "avoidExplicitReturnArrows": true }],
    "object-shorthand": ["error", "properties"],
    "arrow-parens": ["error", "as-needed"],
    "quote-props": ["error", "as-needed", { "keywords": true }],
    "prefer-rest-params": "error",
    "no-param-reassign": ["error", { "props": true }],
    "default-param-last": ["error"],
    "no-useless-return": "error",
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],

    "react/jsx-key": ["warn", { "checkFragmentShorthand": true }],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never",
        "children": true
      }
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never", 
        "beforeSelfClosing": "always", 
        "afterOpening": "never",
        "beforeClosing": "allow"
      }
    ],
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": ["warn", {
      "selfClosing": "line-aligned",
      "nonEmpty": "line-aligned"
    }]
    // ------------------------------
  },
}
