<template>
  <div>
    <div class="tab-content">
        <router-view/>
    </div>
    <div class="footer">
      <div
        v-for="(item, index) in footerItems"
        :key="index"
        :class="[tableIndex == index ? 'footer-item-active' : 'footer-item']"
        @click="tableIndex = index"
      >
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import UpDownLayout from '@/components/up-down-layout'
export default {
  data() {
    return {
      tableIndex: 0,
      footerItems: ["房源", "我的订单", "个人中心"],
      urls: ["house-source", "my-order", "user-center"]
    };
  },
  methods: {
    handleSelectSort(x) {
      this.selectSortKey = x - 1;
    }
  },
  created() {
      var cur = this.$route.name;
      var index = this.urls.indexOf(cur);
      this.tableIndex = index;
  },
  watch: {
      tableIndex(newVal) {
          console.log(this.urls[newVal])
          this.$router.push({
              name: this.urls[newVal]
          });
      }
  },
  components: {
      UpDownLayout
  }
};
</script>

<style scoped>
.tab-content {
  border: 1px solid red;
  margin-bottom: 60px;
}

.footer {
  width: 100%;
  height: 57px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  margin: 0 -8px;
  padding: 0 16px;
  box-sizing: border-box;
  border-top: 2px solid antiquewhite;
  background-color: aliceblue;
  z-index: 100;
}

.footer-item {
  display: flex;
  width: 33%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}

.footer-item-active {
  border-radius: 10px;
  display: flex;
  color: white;
  width: 33%;
  height: 80%;
  align-items: center;
  justify-content: space-around;
  background: rgb(83, 93, 231);
}
</style>
