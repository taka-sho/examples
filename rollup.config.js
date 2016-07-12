import typescript from 'rollup-plugin-typescript'

export default {
  entry: './src/app/react/components/index.tsx',
  dest: './dist/assets/react.bundle.js',
  format: 'umd',
  intro: '/*! @license react.bundle.js | Copyright (c) 2016 UNCOVER TRUTH Inc. */',
  plugins: [
    typescript()
  ]
}
