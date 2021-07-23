// 配置文件
/*
使用npm init 设置package.json文件
局部安装webpack：npm install webpack@3.6.0 --save-dev
*/

// 获取package.json中的配置路径
const path = require('path')

// CommonJs模块化管理
module.exports = {
  // 入口：可以是字符串/数组/对象，这里我们只有一个入口，所以写一个字符串即可
  entry: './src/main.js',
  // 出口：通常是一个对象，里面至少包含两个重要属性，path和filename
  output: {
    // 注意：path通常是一个绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}