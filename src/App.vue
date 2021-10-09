<template>
  <div id="app">
    <div
      class="title"
      v-for="(item, index) in list"
      :key="index"
      @click="changeComponent(item, index)"
      :class="selectIndex == index ? 'selected' : ''"
    >
      {{ item.name }}
    </div>
    <component :is="currentCpt" @getSonInfo="getSonInfo($event)" > </component>
 
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectIndex: 0,
      list: [
        {
          src: "./hantu-modal.js",
          name: "hantu-modal",
          title: "modal",
        },
        {
          src: "./hantu-load.js",
          name: "hantu-load",
          title: "load",
        },
      ],
      currentCpt: "hantu-modal",
    };
  },
  methods: {
    getSonInfo(val) {
      console.log("val", val);
    },
    //切换组件
    changeComponent(item, index) {
      const { src, name } = item;
      this.selectIndex = index;
      this.addScript(src, index);
      this.currentCpt = name;
    },
    //添加脚本
    addScript(src, index) {
      const script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("id", `script${index}`);
      script.src = src;
      if (document.getElementById(`script${index}`)) {
        document.getElementById(`script${index}`).src = src;
      } else {
        document.body.appendChild(script);
      }
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
.title {
  width: 180px;
  height: 40px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.selected {
  background: salmon;
}
</style>
