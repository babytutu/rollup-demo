import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'
import { eslint } from 'rollup-plugin-eslint'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'es'
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'answer'
    },
  ],
  plugins: [
    minify({
      // comments: false
    }),
    resolve(),
    commonjs(),
    babel(),
    eslint(),
  ]
}