// 配置文件
/*
使用npm init 设置package.json文件
局部安装webpack：npm install webpack@3.6.0 --save-dev
*/

// 获取package.json中的配置路径
const path = require('path')
// 添加版权信息插件
const webpack = require('webpack')
// 打包index.html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// CommonJs模块化管理
module.exports = {
  // 入口：可以是字符串/数组/对象，这里我们只有一个入口，所以写一个字符串即可
  entry: './src/main.js',
  // 出口：通常是一个对象，里面至少包含两个重要属性，path和filename
  output: {
    // 注意：path通常是一个绝对路径
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css加载
        // style-loader负责将样式添加在DOM中
        // 使用多个loader时，从右向左
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
              // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 30000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin("最终版权归***所有"),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
}