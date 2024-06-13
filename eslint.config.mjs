export default [
  {
    extends: 'next/core-web-vitals',
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          usePrettierrc: false
        }
      ]
    }
  }
]
