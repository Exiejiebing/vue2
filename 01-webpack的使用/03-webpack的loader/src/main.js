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