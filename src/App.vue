<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import jsonp from 'jsonp'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    //测试cors访问,所有请求都可以访问,后端设置响应头
    //let url = "https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list"
    //axios.get(url).then(()=>{
    //})
    //jsonp方式访问,后端封装JSONPObject
    //let url="https://www.imooc.com/activity/servicetime?callback=__jp0"
    //jsonp(url,(error,res)=>{
    //  let result =res;
    //  this.data=result; 
    //})
    //代理方式访问,线上还是在nginx配置,而不应该在vue.config.js配置
    let url="/api/free/"
    axios.get(url).then(()=>{

    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
