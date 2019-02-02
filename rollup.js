import VuePlugin from 'rollup-plugin-vue'
import ScssPlugin from 'rollup-plugin-scss'

export default [
  VuePlugin({ styleToImports: true }),
  ScssPlugin({ output: 'dist/vue-component-library.css' })
]
