let num1 = 10
let num2 = 20

// commonJs的导入
const math = require("./js/mathUtils")
console.log(math.add(num1, num2));
console.log(math.mul(num1, num2));

// ES6的导入
import * as info from "./js/info"
console.log(info.name);
console.log(info.age);
console.log(info.height);

// 依赖css文件
require("./css/normal.css")

// 依赖less文件
require("./css/special.less")

// 使用Vue开发
import Vue from 'vue'
// 使用组件把template与入口文件分离的一种方式
// import App from './vue/app'
// 直接导出Vue文件---vue-loader vue-template-compiler
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})