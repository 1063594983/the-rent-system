<template>
  <div>
    <my-filter-menu @onSelectMenu="handleSelect"></my-filter-menu>
    <div>
      <div class="filter-panel" ref="panel">
        <div class="menu">
          <div
            v-for="(menu, index) in filterMenuList"
            :key="index"
            class="menu-item"
            :class="{'active' : selectedMenu == index}"
            @click="selectedMenu = index"
          >{{ menu.menu }}</div>
        </div>
        <div class="items" v-if="isItemShow">
          <div
            v-for="(item, index) in selectedItems"
            :key="index">
            <div :class="{'items-content' : true, 'animated fadeInUp' : true}">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyFilterMenu from "@/components/my-filter-menu";
export default {
  data() {
    return {
      height: [200, 300, 100],
      filterMenuList: [
        {
          menu: "附近",
          items: ["附近", "500", "1km"]
        },
        {
          menu: "临川区",
          items: ["全部", "人民公园"]
        }
      ],
      selectedMenu: 0,
      isItemShow: true
    };
  },
  computed: {
    selectedItems() {
      return this.filterMenuList[this.selectedMenu].items;
    }
  },
  methods: {
    handleSelect(option) {
      var el = this.$refs.panel;
      switch (option.type) {
        case "open":
          this.switchTo(el, option.index);
          break;
        case "close":
          this.slideIn(el);
          break;
        case "switch":
          this.switchTo(el, option.index);
          break;
      }
    },
    switchTo(el, index) {
      el.style.display = "flex";
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
          height: 0
        },
        {
          duration: 300
        }
      ).then(element => {
        el.style.display = "none";
      });
    }
  },
  components: {
    MyFilterMenu
  }
};
</script>

<style scoped>
.filter-panel {
  display: none;
  flex-direction: row;
  justify-content: start;
  box-shadow: 2px 2px 3px #888888;

  position: fixed;
  margin-top: 10px;
  width: 100%;
  left: 0;

  z-index: 100;
  background-color: white;
}

.filter-panel .menu {
  overflow-y: hidden;
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
  overflow-y: hidden;
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
