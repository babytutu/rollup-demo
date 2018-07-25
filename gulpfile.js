const gulp = require('gulp')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const minify = require('rollup-plugin-babel-minify')
const {eslint} = require('rollup-plugin-eslint')

gulp.task('default', async () => {
  const bundle = await rollup.rollup({
    input: 'src/main.js',
    plugins: [
      minify(),
      resolve(),
      commonjs(),
      babel(),
      eslint(),
    ]
  })

  await bundle.write({
    file: 'dist/bundle.umd.gulp.js',
    format: 'umd',
    name: 'answer'
  })

  await bundle.write({
    file: 'dist/bundle.gulp.js',
    format: 'es',
  })
})
