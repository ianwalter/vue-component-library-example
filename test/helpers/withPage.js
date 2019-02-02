import puppeteerHelper from '@ianwalter/puppeteer-helper'

export default puppeteerHelper([
  './node_modules/vue/dist/vue.js',
  './node_modules/vue-template-compiler/browser.js',
  './node_modules/@vue/test-utils/dist/vue-test-utils.iife.js',
  './node_modules/@ianwalter/sled/dist/sled.umd.js',
  './dist/vue-component-library.iife.js'
], { dumpio: true })
