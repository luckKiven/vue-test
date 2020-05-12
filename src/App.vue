<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index"

export default {
  name: 'App',
  components: {
    
  },
  mounted(){
    //storage.setItem("abc11",{"abc":"1"});
    //storage.setItem("abc1","3333","abc11");
    //storage.setItem("abc11",{"abc":{"123":"1"}});
    //storage.clear("abc11");
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
