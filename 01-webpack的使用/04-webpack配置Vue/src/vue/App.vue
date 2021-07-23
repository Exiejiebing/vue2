<!--使用Vue文件封装组件-->
<!--html信息-->
<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<!--js代码-->
<script>
import Cpn from './Cpn.vue'
export default {
  name: "App",
  data() {
    return {
      message: '你好啊',
      name: '谢洁冰',
    }
  },
  methods: {
    btnClick() {
      console.log('btnClick');
    }
  },
  components: {
    Cpn
  }
}
</script>

<!--样式-->
<style scoped>
.title {
  color: green;
}
</style>