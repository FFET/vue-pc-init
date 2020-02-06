<template>
  <transition :name="transitionName">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
  </transition>
</template>

<script>
import request from "@utils/request";
export default {
  name: "app",
  data() {
    return {
      data: {
        statistics: {},
        areaStat: []
      },
      transitionName: "slide-go"
    };
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-go";
      } else {
        this.transitionName = "slide-back";
      }
      this.nowUrl = to.fullPath;
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
