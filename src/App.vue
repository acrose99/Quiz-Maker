<template>
  <div id="app">
    <div id="nav">
      <router-view @authenticated="false" />
    </div>
  </div>
</template>


<script>
  export default {
    name: 'App',
    data() {
      return {
        authenticated: false,
      }
    },
    mounted() {
      if(!this.authenticated) {
        this.$router.replace({ name: "signup" });
      }
    }
  }
</script>

<style>

  h1 {
    margin: 75px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 1024px;
    margin: auto;
  }
  #nav {
    padding: 30px;
   
    font-weight: bold;
    color: #2c3e50;

  
  }
  img {
    width: 300px;
    height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0px;
  }
  #auth {
    position: relative;
  }
</style>