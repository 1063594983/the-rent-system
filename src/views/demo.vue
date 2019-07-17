<template>
  <div>
    <up-down-layout>
      <div slot="header">
        <div>
          <common-header
            :show-back="false"
            :right-method="search"
            right-icon="el-icon-search"
            title="房源"
          ></common-header>
        </div>
      </div>
      <div slot="body">
        <div class="filter-menu">
          <common-filter-menu></common-filter-menu>
        </div>
        <div>
          <common-scroll>
            <div slot="content" @scroll="handleScroll($event)">
              <rent-info-list :num="cardList.length" :card-list="cardList"></rent-info-list>
            </div>
          </common-scroll>
        </div>
      </div>
    </up-down-layout>
  </div>
</template>

<script>
import rentInfoList from "@/components/rent-info-list";
import CommonHeader from "@/components/common-header";
import CommonFilterMenu from "@/components/common-filter-menu";
import CommonScroll from '@/components/common-scroll';
import UpDownLayout from "@/components/up-down-layout";
export default {
  data() {
    return {
      filterPanelClass: "filter-panel",
      content: {
        title: "nihao"
      },
      panelIndex: 1,
      selectSortKey: 0,
      cardList: []
    };
  },
  created() {
    this.$axios.get(this.$api + "/house/getHouse", {
      params: {
        size: 20
      }
    }).then(res => {
      this.cardList = res.data;
      /*
      for (let item of this.cardList) {
        item.details = JSON.parse(item.details)
      }*/
    })
  },
  methods: {
    handleScroll(e) {
      console.log(e)
    },
    handleSelectSort(x) {
      this.selectSortKey = x - 1;
    },
    search() {
      this.$router.push({
        name: "search"
      });
    }
  },
  components: {
    rentInfoList,
    CommonHeader,
    CommonFilterMenu,
    UpDownLayout,
    CommonScroll
  }
};
</script>

<style scoped>
</style>
