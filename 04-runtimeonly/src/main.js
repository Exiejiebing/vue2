import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

/*runtime-compiler*/
/*new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})*/

// runtime-only的优点
// h => createElement
/*
1. 性能更高
2. 代码量少
* */
