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
        <common-filter-menu></common-filter-menu>
        <common-scroll :on-refresh="onRefresh">
            <div slot="content">
              <house-info-list :num="cardList.length" :card-list="cardList"></house-info-list>
            </div>
          </common-scroll>
      </div>
    </up-down-layout>
  </div>
</template>

<script>
import HouseInfoList from "@/components/house-info-list";
import CommonHeader from "@/components/common-header";
import CommonFilterMenu from "@/components/common-filter-menu";
import CommonScroll from '@/components/common-scroll'
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
    })
  },
  methods: {
    search() {
      this.$router.push({
        name: "search"
      });
    },
    onRefresh(done) {
      this.$axios.get(this.$api + "/house/getHouseAfter", { 
        params: {
          release_time: this.cardList[0].release_time
        }
      }).then(res => {
        res.data.forEach(element => {
          this.cardList.unshift(element)
        });
        done();
        if(res.data.length == 0) {
          this.$message({
          message: "无新租房信息"
        })
        } else {
          this.$message({
            message: res.data.length + "条新租房信息",
            type: 'success'
          })
        }
        
      })
    }
  },
  components: {
    HouseInfoList,
    CommonHeader,
    CommonFilterMenu,
    UpDownLayout,
    CommonScroll
  }
};
</script>

<style scoped>
</style>
