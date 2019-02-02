const { join } = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const site = join(__dirname, 'site')
const include = [site, join(__dirname, 'components')]

module.exports = (env = {}) => ({
  mode: isProduction ? 'production' : 'development',
  entry: join(site, 'main.js'),
  output: {
    path: join(site, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': site
    }
  },
  module: {
    rules: [
      { test: /\.js$/, include, loader: 'babel-loader' },
      { test: /\.vue$/, include, loader: 'vue-loader' },
      { test: /\.css$/, include, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    ...(env.singleRun ? [
      new CleanWebpackPlugin(['dist'])
    ] : []),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './site/index.html' })
  ]
})
