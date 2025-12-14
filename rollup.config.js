// Allow finding Bellhop import from npm package
import resolve from 'rollup-plugin-node-resolve'
// Allows sourcemaps from external libs to be included in output sourcemaps
import sourcemaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'

const prod = true //process.env.NODE_ENV === 'production'

const sourcemap = prod ? true : 'inline'

const plugins = [resolve(), sourcemaps(), prod && terser({ toplevel: true })]

export default [
  {
    input: 'src/ComToPlugin.js',
    output: {
      file: 'dist/comToPlugin.js',
      format: 'umd',
      name: 'window',
      extend: true,
      sourcemap
    },
    plugins
  },
  {
    input: 'src/HtmlBased.js',
    output: {
      file: 'dist/HtmlBased.js',
      format: 'es',
      sourcemap
    },
    plugins
  },
  {
    input: 'src/dcs-html-based.js',
    output: {
      file: 'dist/dcs-html-based.js',
      format: 'iife',
      name: 'DcsUnused',
      sourcemap
    },
    plugins
  },
  {
    input: 'src/dcs-decorator.js',
    output: {
      file: 'dist/dcs-decorator.js',
      format: 'iife',
      name: 'DcsUnused',
      sourcemap
    },
    plugins
  }
]
