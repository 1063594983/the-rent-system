<template>
  <div>
    <div id="filter-menu">
      <span :class="filterItemClass[0]" @click="toggle(1)">
        附近
        <i :class="filterItemIconClass[0]"></i>
      </span>
      <span :class="filterItemClass[1]" @click="toggle(2)">
        {{ sortMethod }}
        <i :class="filterItemIconClass[1]"></i>
      </span>
      <span :class="filterItemClass[2]" @click="toggle(3)">
        筛选
        <i :class="filterItemIconClass[2]"></i>
      </span>
    </div>

    <div class="filter-panel" v-show="isShow" ref="demo">
      <div class="menu">
        <div
          v-for="(menu, index) in filterMenuList"
          :key="index"
          class="menu-item"
          :class="{'active' : selectedMenu == index}"
          @click="selectedMenu = index"
        >{{ menu.menu }}</div>
      </div>
      <div v-if="isItemShow" :class="{'items' : true}">
        <div>
          <div
            v-for="(item, index) in selectedItems"
            :key="index"
            :class="{'items-content' : true, 'animated fadeInUp' : finished}"
          >{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonFilterPanel from "@/components/common-filter-panel";
export default {
  data() {
    return {
      activeIndex: 0,
      filterItemClass: ["filter-item", "filter-item", "filter-item"],
      filterItemIconClass: [
        "el-icon-caret-bottom",
        "el-icon-caret-bottom",
        "el-icon-caret-bottom"
      ],
      isShow: false,
      height: ["300px", "200px", "400px"],
      current: "",
      selectedMenu: 0,
      selectedItems: [],
      isItemShow: true,
      finished: false
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
    }
  },
  computed: {
    filterMenuOpened() {
      return this.activeIndex != 0;
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
      //start animate
      this.finished = true;

      this.isItemShow = false;

      this.selectedItems = this.filterMenuList[this.selectedMenu].items;
    }
  },
  methods: {
    toggle(index) {
      var type = "";
      if (this.activeIndex == 0) {
        this.$set(this.filterItemClass, index - 1, "filter-item-active");

        this.$set(this.filterItemIconClass, index - 1, "el-icon-caret-top");

        this.activeIndex = index;

        type = "open";

        /*
                //触发打开事件
                this.$emit("panelOpen", index);
                */
      } else if (this.activeIndex == index) {
        this.$set(this.filterItemClass, index - 1, "filter-item");

        this.$set(this.filterItemIconClass, index - 1, "el-icon-caret-bottom");

        this.activeIndex = 0;

        type = "close";

        /*
                //触发关闭事件
                this.$emit("panelClose");*/
      } else if (this.activeIndex != index) {
        this.$set(this.filterItemClass, this.activeIndex - 1, "filter-item");
        this.$set(this.filterItemClass, index - 1, "filter-item-active");

        this.$set(
          this.filterItemIconClass,
          this.activeIndex - 1,
          "el-icon-caret-bottom"
        );
        this.$set(this.filterItemIconClass, index - 1, "el-icon-caret-top");

        this.activeIndex = index;

        type = "switch";
        /*
                //触发切换事件
                this.$emit("panelSwitch", index);
                */
      }

      //this.$emit('itemClick', index, type);
      var el = this.$refs.demo;
      if (type == "open") {
        this.isShow = true;
        this.slideOut(el, index - 1);
      } else if (type == "switch") {
        this.switch(el, index - 1);
      } else {
        this.slideIn(el);
      }
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
  },
  components: {
    CommonFilterPanel
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

  border: 1px solid red;
}

.filter-item-active {
  color: green;
}

.demo {
  border: 1px solid red;
}

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
