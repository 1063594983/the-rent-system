<template>
  <div>
    <div>
      <div>
        <app-header></app-header>
      </div>
      <div>
        <filter-menu @itemClick="handleClick" :sort-method="sortKeys[selectSortKey]"></filter-menu>
        <filter-panel
          :class="filterPanelClass"
          :panel-content="content"
          :panel-index="panelIndex"
          @selectSort="handleSelectSort"
        ></filter-panel>
      </div>
      <div>
        <rent-info-list :num="20" :card-list="cardList"></rent-info-list>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "@/components/header";
import filterMenu from "@/components/filter-menu";
import filterPanel from "@/components/filter-panel";
import rentInfoList from "@/components/rent-info-list";

import cardList from "@/data/cardList.json";

var contents = [
  {
    title: "附近"
  },
  {
    title: "智能排序"
  },
  {
    title: "筛选"
  }
];

let sortKeys = ["智能排序", "离我最近", "好评优先"];
export default {
  data() {
    return {
      filterPanelClass: "filter-panel",
      content: {
        title: "nihao"
      },
      panelIndex: 1,
      sortKeys: sortKeys,
      selectSortKey: 0,
      cardList,
    };
  },
  created() {},
  methods: {
    handleClick(index, type) {
      switch (type) {
        case "open":
          this.filterPanelClass = "filter-panel-show";
          this.content = contents[index - 1];
          this.panelIndex = index;
          break;
        case "switch":
          this.content = contents[index - 1];
          this.panelIndex = index;
          break;
        case "close":
          this.filterPanelClass = "filter-panel";
          break;
      }
    },
    handleSelectSort(x) {
      this.selectSortKey = x - 1;
    }
  },
  components: {
    appHeader,
    filterMenu,
    filterPanel,
    rentInfoList
  }
};
</script>

<style scoped>
@keyframes myFirst {
  from {
    height: 0px;
  }

  to {
    height: 200px;
  }
}

.filter-panel {
  display: none;
}

.filter-panel-show {
  /*border: 1px solid red;*/
  display: block;
  /*height: 200px;*/
  position: fixed;
  width: 100%;
  /*background: #ffffff;*/
  background: rgba(238, 232, 232, 0.9);
  animation: myFirst 1s;
  /*overflow-y: scroll;*/
  overflow: hidden;
}

</style>
