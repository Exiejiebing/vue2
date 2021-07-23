// 用js文件封装组件内部信息
export default {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">按钮</button>
      <h2>{{name}}</h2>
    </div>
  `,
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
  }
}