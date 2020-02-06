<template>
  <div class="areaStat">
    <a-button type="primary">Primary</a-button>
    <div class="detail-header">
      <div>地区</div>
      <div>确诊</div>
      <div>死亡</div>
      <div>治愈</div>
    </div>
    <div v-for="(item, i) in data" :key="i">
      <div class="detail-item" @click="fnDisplay(i)">
        <div>{{ item.provinceShortName }}</div>
        <div>{{ item.confirmedCount }}</div>
        <div>{{ item.deadCount }}</div>
        <div>{{ item.curedCount }}</div>
      </div>
      <div v-if="i === index">
        <div v-for="(subItem, j) in item.cities" :key="j" class="detail-sub-item">
          <div>{{ subItem.cityName }}</div>
          <div>{{ subItem.confirmedCount }}</div>
          <div>{{ subItem.deadCount }}</div>
          <div>{{ subItem.curedCount }}</div>
        </div>
      </div>
    </div>
  </div>
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
