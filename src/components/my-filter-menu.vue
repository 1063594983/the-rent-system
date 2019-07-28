<template>
  <div>
    <div id="filter-menu">
      <div v-for="(item, index) in menuItems" :key="index">
        <span :class="{'filter-item': true, 'filter-active': activeIndex == index}" @click="toggle(index)">
          {{ item }}
          <i :class="{'el-icon-caret-bottom': activeIndex != index, 'el-icon-caret-top': activeIndex == index}"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: -1
    };
  },
  props: {
    menuItems: {
      type: Array,
      default: () => [
        "附近",
        "距离最近",
        "筛选"
      ]
    }
  },
  watch: {
    menuItems(newVal) {
      this.activeIndex = -1;
      this.$emit("onSelectMenu", {
        type: "close",
        index: -1
      })
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
