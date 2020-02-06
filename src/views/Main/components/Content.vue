<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Detail",
  props: {
    data: Array
  },
  data() {
    return {
      index: NaN
    };
  },
  methods: {
    fnDisplay(index) {
      this.index = this.index === index ? NaN : index;
    }
  }
};
</script>

<style lang="less" scoped>
.areaStat {
  margin-top: 0.3rem;
}
.detail-header {
  background-color: #eee;
  top: 0;
}
.detail-header {
  padding: 0.2rem 0;
}

.detail-header,
.detail-item,
.detail-sub-item {
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  padding: 0.2rem 0;
  > div {
    flex: 1;
    text-align: center;
  }
}

.detail-item {
  background-color: #f7f7f7;
  border-bottom: 1px solid #eee;
}
</style>
