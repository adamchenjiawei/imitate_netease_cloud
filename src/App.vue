<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import MHeader from './components/widgets/m-header.vue'
  import MFooter from './components/widgets/m-footer.vue'
  export default {
    name: 'app',
    components: {
      MHeader,
      MFooter
    }
  }
</script>

<style>
  body {
    margin: 0;
    font-size: 0.14rem;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
    background-color: #f5f5f5;
  }
  html {
    font-size: calc(100vw/3.75)
  }
</style>
