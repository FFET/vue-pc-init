<template>
  <div id="app">
    <Header :data="data.statistics" />
    <Menu />
    <div class="content">
      <Content :data="data.areaStat" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import request from "@utils/request";

export default {
  name: "app",
  components: { Header, Menu, Content },
  data() {
    return {
      data: {
        statistics: {},
        areaStat: []
      }
    };
  },
  created() {
    // this.fnGetData();
  },
  methods: {
    // async fnGetData() {
    //   const response = await request.get("https://m.shanghaim.net/napi/pneumonia/query");
    //   this.data = response.data.data;
    // }
  }
};
</script>

<style lang="less" scoped>
.content {
  margin-left: 150px;
  margin-top: 60px;
}
</style>
