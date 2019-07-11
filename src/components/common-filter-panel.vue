<template>
  <div class="filter-panel">
    <div class="menu">
      <div
        v-for="(menu, index) in filterMenuList"
        :key="index"
        class="menu-item"
        :class="{'active' : selectedMenu == index}"
        @click="selectedMenu = index"
      >{{ menu.menu }}</div>
    </div>
    <div v-if="isShow" :class="{'items' : true}">
      <div>
        <div
          v-for="(item, index) in selectedItems"
          :key="index"
          :class="{'items-content' : true, 'animated fadeInUp' : finished}"
        >{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMenu: 0,
      selectedItems: [],
      isShow: true,
      finished: false
    };
  },
  props: {
    filterMenuList: {
      type: Array,
      default: () => [
        {
          menu: "附近",
          items: ["附近", "500", "1km"]
        },
        {
          menu: "临川区",
          items: ["全部", "人民公园"]
        }
      ]
    }
  },
  created() {
    this.selectedItems = this.filterMenuList[this.selectedMenu].items;
  },
  updated() {
    this.isShow = true;
  },
  watch: {
    selectedMenu(newVal, oldVal) {
      if (newVal == oldVal) {
        return;
      }
      //start animate
      this.finished = true;

      this.isShow = false;

      this.selectedItems = this.filterMenuList[this.selectedMenu].items;
    }
  },
  methods: {}
};
</script>

<style scoped>
.filter-panel {
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: start;

  box-shadow: 2px 2px 3px #888888;
}

.filter-panel .menu {
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.filter-panel .menu .menu-item {
  display: block;

  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.active {
  color: red;
}

.filter-panel .items {
  overflow-y: auto;
  flex: 2;
  display: flex;
  flex-direction: column;
}

.filter-panel .items .items-content {
  display: block;

  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
