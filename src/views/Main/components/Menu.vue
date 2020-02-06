<template>
  <div class="menu">
    菜单
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    data: null
  }
};
</script>

<style lang="less" scoped>
.menu {
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  background-color: #eee;
  width: 140px;
}
</style>
