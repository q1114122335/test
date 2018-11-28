<template>
  <div id="app">
  	<router-view></router-view>
      <ul>
        <li><router-link to="/menu"><img src="./assets/img/a53.png"></router-link></li>
        <li><router-link to="/fenlei"><img src="./assets/img/a19.png"></router-link></li>
        <li><router-link to="/shopping"><img src="./assets/img/a20.png"></router-link></li>
        <li><router-link to="/my"><img src="./assets/img/a52.png"></router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul{
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  width: 100%;
  z-index: 100;
}
ul li{
  flex:1;
  text-align: center;
  background-color: #fff;
}

a {
  color: #42b983;
}
</style>
