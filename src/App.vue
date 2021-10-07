<template>
  <div id="app">
    11111111
    <demo showContent="我是子组件1111"></demo>
  </div>
</template>
<script>
//  import modal from './components/modal.vue'
export default {
  components: {
    demo: myModal,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
