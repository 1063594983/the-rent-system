<template>
  <div>
    <my-filter-menu @onSelectMenu="handleSelect" :menu-items="menuItems"></my-filter-menu>
    <div>
      <div class="panel" ref="panel">
        <div class="place-panel" v-if="selectedIndex == 0">
          <div class="menu">
            <div
              v-for="(menu, index) in filterMenuList"
              :key="index"
              class="menu-item"
              :class="{'active' : selectedMenu == index}"
              @click="selectedMenu = index"
            >{{ menu.menu }}</div>
          </div>
          <div class="items">
            <div v-for="(item, index) in selectedItems" :key="index">
              <div :class="{'items-content' : true, 'animated fadeInUp' : true, 'active': selectedItemIndex == index}" @click="selectedItemIndex = index">{{ item }}</div>
            </div>
          </div>
        </div>
        <div class="sort-method" v-if="selectedIndex == 1"> 
          <div v-for="(item, index) in methodList" 
            :key="index" :class="{'method-item': true, 'active': selectedMethod == index}" @click="selectedMethod = index">
            {{ item }}
          </div>
        </div>
        <div class="filter-form" v-if="selectedIndex == 2">
          <div class="form-item">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyFilterMenu from "@/components/my-filter-menu";
import filterMenuList from './place.json'
// var filterMenuList = require('./place.json')
export default {
  data() {
    return {
      height: [250, 150, 300],
      filterMenuList: filterMenuList,
      selectedMenu: 0,
      selectedIndex: -1,
      selectedMethod: 0,
      selectedItemIndex: -1,
      menuItems: ["附近", "距离最近", "筛选"],
      methodList: ['距离最近', '价格最低', '智能排序']
    };
  },
  computed: {
    selectedItems() {
      return this.filterMenuList[this.selectedMenu].items;
    }
  },
  watch: {
    selectedMethod(newVal) {
      this.$set(this.menuItems, 1, this.methodList[newVal]);
    },
    selectedMenu(newVal) {
      this.selectedItemIndex = -1;
    },
    selectedItemIndex(newVal) {
      if (newVal == -1) {
        return ;
      }
      this.$set(this.menuItems, 0, this.selectedItems[newVal]);
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
      // 设置当前打开面板索引
      this.selectedIndex = index;
      // 初始化样式
      el.style.display = "flex";
      el.style.height = 0;
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
      )
        .then(element => {
          el.style.display = "none";
        })
        .then(element => {
          // 关闭时面板索引
          this.selectedIndex = -1;
        });
    }
  },
  components: {
    MyFilterMenu
  }
};
</script>

<style scoped>
.panel {
  display: none;
  box-shadow: 2px 2px 3px #888888;

  position: fixed;
  margin-top: 10px;
  width: 100%;
  left: 0;

  z-index: 100;
  background-color: white;
}

.panel .place-panel {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
}

.place-panel .menu {
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.place-panel .menu .menu-item {
  display: block;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.active {
  color: red;
}

.place-panel .items {
  overflow-y: auto;
  flex: 2;
  display: flex;
  flex-direction: column;
}

.place-panel .items .items-content {
  display: block;

  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.panel .sort-method {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}

.panel .sort-method .method-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.panel .filter-form {
  display: flex;
  flex-direction: column;
}
</style>
