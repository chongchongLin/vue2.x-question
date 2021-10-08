<template>
  <div id="app">
    <!-- <component :is="currentView" @changeview="changeViewFun" :pathUrl="pathUrl">
    </component> -->
    <hantu-modal
      show-content="test"
      @getSonInfo="getSonInfo($event)"
    ></hantu-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getSonInfo(val) {
      console.log("val", val);
    },
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
