<template>
  <div class="nav">
    <div class="nav-container">
      <div class="left" v-on:click="fnMethod"></div>
      <div class="title">{{ title }}</div>
      <div class="right" v-if="right">搜索</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    title: String,
    right: Object
  },
  methods: {
    fnMethod() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  background: #015496 100%;
  color: #fff;
  font-size: 0.4rem;
  left: 0;
  top: 0;
  right: 0;
}
.nav-container {
  position: relative;
  padding: 0.13rem;
  height: 0.6rem;
}
.title {
  text-align: center;
}
.left {
  position: absolute;
  height: 0.3rem;
  width: 0.3rem;
  position: absolute;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: rotate(-45deg);
  left: 0.3rem;
  top: 0.3rem;
}
.right {
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
}
</style>
