import Vue from 'vue'
import axios from 'axios'        //导包axios
import VueAxios from 'vue-axios' //挂载到vue实例上
import router from './router'   //导入router.js 作为路由组件
import App from './App.vue'

/**main.js的作用: 类似springMVC的DispatchServlet
 * main.js是项目的入口文件，项目中所有的页面都会加载main.js,所以main.js,主要有三个作用：
1.实例化Vue。
2.放置项目中经常会用到的插件和CSS样式。例如： 网络请求插件:axios和vue-resource、图片懒加载插件：vue-lazyload
3.存储全局变量。例如（用于的基本信息）
 */


//根据 前端的跨域方式做调整,
//不一样则 http:www.baidu.com
//后端域名跟前端域名一致的时候使用了代理
//一样则:'/api'  /a/b  => /api/a/b=> /a/b
axios.defaults.baseURL = '/api' ;
//超时时间八秒
axios.defaults.timeout = 8000;
//axios封装的response给我们,此处为拦截器,直接写到main.js中.
axios.interceptors.respoonse.use(function(response){
  //取到data数据
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status == 10){
    //错误的拦截,错误的登陆,跳转到登陆页面
    //main.js不能用this.所以不能用路由
    //带#号的就是hash路由
    window.location.href='/#/login'
  }else{
    alert(res.msg);
  }
});
Vue.use(VueAxios,axios)
Vue.config.productionTip = false//不打印信息
new Vue({
  router,
  render:h=>h(app),
}).$mount('app')
//手动挂载vue实例: 
/**
 * $mount()手动挂载
当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载。例如：
 */
  
