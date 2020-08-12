<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">登陆</router-link>|
      <router-link to="/register">注册</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
     
    };
  },
  methods: {
    updateCity(data) {
     
    },
    getMyEvent(){
      
    }
  },
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
