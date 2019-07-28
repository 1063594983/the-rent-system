<template>
  <div>
    <!-- 房源发布信息（上下布局） -->
    <up-down-layout>
      <!-- 头部 -->
      <div slot="header">
        <div>
          <common-header
            :show-back="false"
            :right-method="() => this.$router.push({name: 'search'})"
            right-icon="el-icon-search"
            title="房源"
          ></common-header>
        </div>
      </div>
      <!-- 内容 -->
      <div slot="body">
        <!-- 筛选菜单 -->
        <filter-menu></filter-menu>
        <!-- 下拉菜单 -->
        <common-scroll :on-refresh="onRefresh">
          <!-- 内容 -->
          <div slot="content" class="content">
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
import FilterMenu from "./filter-menu";
import CommonScroll from "@/components/common-scroll";
import UpDownLayout from "@/components/up-down-layout";

export default {
  data() {
    return {
      cardList: []
    };
  },
  created() {
    // 获取最新20条房源信息
    this.$axios
      .get(this.$api + "/house/getHouse", {
        params: {
          size: 20
        }
      })
      .then(res => {
        this.cardList = res.data;
      });
  },
  methods: {
    // 下拉刷新时加载新房源信息
    onRefresh(done) {
      this.$axios
        .get(this.$api + "/house/getHouseAfter", {
          params: {
            release_time: this.cardList[0].release_time
          }
        })
        .then(res => {
          res.data.forEach(element => {
            this.cardList.unshift(element);
          });
          done();
          if (res.data.length == 0) {
            this.$message({
              message: "无新租房信息"
            });
          } else {
            this.$message({
              message: res.data.length + "条新租房信息",
              type: "success"
            });
          }
        });
    }
  },
  components: {
    HouseInfoList,
    CommonHeader,
    FilterMenu,
    UpDownLayout,
    CommonScroll
  }
};
</script>

<style scoped>
.content {
  margin-bottom: 50px;
}
</style>
