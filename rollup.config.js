import typescript from 'rollup-plugin-typescript'

export default {
  entry: './src/app/react/CommentBox.tsx',
  dest: './dist/assets/react.bundle.js',
  format: 'iife',
  intro: '/*! @license react.bundle.js | Copyright (c) 2016 UNCOVER TRUTH Inc. */',
  sourceMap: 'inline',
  plugins: [
    typescript()
  ]
}
