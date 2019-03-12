<template>
  <div>
    <div class="user-index" v-if="tableIndex == 1">
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
      <!--
        <div class="footer">
            <div :class="[activeFooterKey == 1 ? 'footer-item-active' : 'footer-item']" @click="activeFooterKey = tableIndex = 1">
                <div>
                    房源
                </div>
            </div>
            <div :class="[activeFooterKey == 2 ? 'footer-item-active' : 'footer-item']" @click="activeFooterKey = tableIndex = 2">
                <div>
                    我的订单
                </div>
            </div>
            <div :class="[activeFooterKey == 3 ? 'footer-item-active' : 'footer-item']" @click="activeFooterKey = tableIndex = 3">
                <div>
                    个人中心
                </div>
            </div>
        </div>
      -->
    </div>
    <div v-if="tableIndex == 2">
      <el-card>
        <div class="card">
          <div class="info-card">
            <div class="left">
              <img :src="cardInfo.imgUrl" class="image">
            </div>
            <div class="right">
              <div class="card-title">{{ cardInfo.title }}</div>
              <div class="place-info">
                <div class="description">{{ cardInfo.address }}</div>
                <div class="distance">{{ cardInfo.distance }}</div>
              </div>
              <div>租金: {{ 4800 }}元</div>
              <div>租期: {{ 3 }}个月</div>
            </div>
          </div>
          <div>
              <el-button>取消订单</el-button>
              <el-button>确定订单</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div v-if="tableIndex == 3">table3</div>
    <div class="footer">
      <div
        :class="[activeFooterKey == 1 ? 'footer-item-active' : 'footer-item']"
        @click="activeFooterKey = tableIndex = 1"
      >
        <div>房源</div>
      </div>
      <div
        :class="[activeFooterKey == 2 ? 'footer-item-active' : 'footer-item']"
        @click="activeFooterKey = tableIndex = 2"
      >
        <div>我的订单</div>
      </div>
      <div
        :class="[activeFooterKey == 3 ? 'footer-item-active' : 'footer-item']"
        @click="activeFooterKey = tableIndex = 3"
      >
        <div>个人中心</div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "@/components/header";
import filterMenu from "@/components/filter-menu";
import filterPanel from "@/components/filter-panel";
import rentInfoCard from "@/components/rent-info-card";
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
      activeFooterKey: 1,
      tableIndex: 1,
      cardInfo: {
        imgUrl: "../../static/image/house/h1-1.jpg",
        title: "南亭佳苑 2室1厅1卫",
        address: "金展路2146弄",
        distance: "1.4km",
        price: 1600,
        id: 1
      }
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
      //this.filterPanelClass = "filter-panel";
    }
  },
  components: {
    appHeader,
    filterMenu,
    filterPanel,
    rentInfoCard,
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

.user-index {
  display: flex;
  flex-direction: column;
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

.footer {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 8px;
  margin: 0 -8px;
  padding: 0 16px;
  box-sizing: border-box;
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
  height: 100%;
  align-items: center;
  justify-content: space-around;
  background: rgb(83, 93, 231);
  /*box-shadow: 5px 5px white inset;*/
}

.info-card {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.left {
  width: 30%;
  padding: 5px;
  /*border: 1px solid red;*/
}

.left .image {
  display: block;
  width: 80%;
  height: 80%;
}

.right {
  width: 70%;
  /*border: 1px solid red;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
}

.right .card-title {
  /*color: green;*/
  font-size: 20px;
}

.right .place-info {
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
