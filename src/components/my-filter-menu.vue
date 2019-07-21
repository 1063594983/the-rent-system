<template>
  <div>
    <div id="filter-menu">
      <div v-for="(item, index) in menuItems" :key="index">
        <span :class="{'filter-item': true, 'filter-active': activeIndex == index}" @click="toggle(index)">
          {{ item.selected }}
          <i :class="{'el-icon-caret-bottom': activeIndex != index, 'el-icon-caret-top': activeIndex == index}"></i>
        </span>
      </div>
    </div>
    <div class="filter-panel" v-show="isShow" ref="panel">
      <div class="menu">
        <div
          v-for="(menu, index) in filterMenuList"
          :key="index"
          class="menu-item"
          :class="{'active' : selectedMenu == index}"
          @click="selectedMenu = index"
        >{{ menu.menu }}</div>
      </div>
      <div v-if="isItemShow" class="items">
        <div>
          <div
            v-for="(item, index) in selectedItems"
            :key="index"
            :class="{'items-content' : true, 'animated fadeInUp' : true}"
          >{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: -1,
      filterItemClass: ["filter-item", "filter-item", "filter-item"],
      filterItemIconClass: [
        "el-icon-caret-bottom",
        "el-icon-caret-bottom",
        "el-icon-caret-bottom"
      ],
      isShow: false,
      selectedMenu: 0,
      selectedItems: [],
      isItemShow: true
    };
  },
  props: {
    sortMethod: {
      type: String,
      default: "智能排序"
    },
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
    },
    height: {
      type: Array,
      default: () => [300, 200, 400]
    },
    menuItems: {
      type: Array,
      default: () => [
        { selected: "附近" },
        { selected: "智能排序" },
        { selected: "筛选" }
      ]
    }
  },
  created() {
    this.selectedItems = this.filterMenuList[this.selectedMenu].items;
  },
  updated() {
    this.isItemShow = true;
  },
  watch: {
    selectedMenu(newVal, oldVal) {
      if (newVal == oldVal) {
        return;
      }
      this.isItemShow = false;

      this.selectedItems = this.filterMenuList[this.selectedMenu].items;
    }
  },
  methods: {
    toggle(index) {
      var type = "";
      
      if (this.activeIndex == -1) {       
        this.activeIndex = index;
        type = "open";

      } else if (this.activeIndex == index) {
        this.activeIndex = -1;
        type = "close";

      } else if (this.activeIndex != index) {
        this.activeIndex = index;
        type = "switch";
      }
      this.$emit("onSelectMenu", {
        type,
        index
      })
    },
    switch(el, index) {
      this.$Velocity(
        el,
        {
          height: this.height[index]
        },
        {
          duration: 300
        }
      );
    },
    slideOut(el, index) {
      this.$Velocity(
        el,
        {
          height: this.height[index]
        },
        {
          duration: 300
        }
      );
    },
    slideIn(el) {
      this.$Velocity(
        el,
        {
          height: 10
        },
        {
          duration: 300,
          complete: () => {
            this.isShow = false;
          }
        }
      );
    }
  }
};
</script>

<style scoped>
#filter-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 0.8ch;
  height: 20px;
}

.filter-active {
  color: green;
}

.filter-panel {
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
