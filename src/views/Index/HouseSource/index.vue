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
import EthLayer from "../../../utils/EthLayer.js";
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
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              console.log(position.coords);
              var location = {};
              location.lat = position.coords.latitude;
              location.lng = position.coords.longitude;
              this.cardList.forEach(value => {
                var location2 = value.details.location;
                console.log(
                  "(" +
                    location.lat +
                    "," +
                    location.lng +
                    ")-(" +
                    location2.lat +
                    "," +
                    location2.lng +
                    ")"
                );
                console.log(
                  value.details.address +
                    " " +
                    this.getDistance(
                      location.lat,
                      location2.lat,
                      location.lng,
                      location2.lng
                    )
                );
              });
            },
            err => {
              console.log(err);
            },
            { enableHighAccuracy: true }
          );
        } else {
          // console.log('error')
        }
        // console.log(this.cardList[0].details.location)
      });
  },
  mounted() {
    // eth.getUserCredit()
  },
  methods: {
    getDistance(lat1, lat2, lng1, lng2) {
      function rad(d) {
        return (d * Math.PI) / 180.0;
      }
      let radLat1 = rad(lat1);
      let radLat2 = rad(lat2);
      let a = radLat1 - radLat2;
      let b = rad(lng1) - rad(lng2);
      let s =
        2 *
        Math.asin(
          Math.sqrt(
            Math.pow(Math.sin(a / 2), 2) +
              Math.cos(radLat1) *
                Math.cos(radLat2) *
                Math.pow(Math.sin(b / 2), 2)
          )
        );
      s = s * 6378.137; // EARTH_RADIUS;
      s = Math.round(s * 10000) / 10000; //输出为公里
      return s;
    },
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
