<template>
  <div class="header">
    <div>后台管理</div>
    <div><span @click="fnLogout" :style="{ cursor: 'pointer' }">退出</span></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    data: null
  },
  methods: {
    fnLogout() {
      console.log("logout");
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  line-height: 50px;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
}
</style>
