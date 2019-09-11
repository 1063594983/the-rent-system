<template>
  <div>
    <!-- 上下布局 -->
    <up-down-layout>
      <!-- 发布订单头部 -->
      <div slot="header">
        <common-header title="发布订单" :show-right="false"></common-header>
      </div>
      <!-- 发布订单表单 -->
      <div slot="body">
        <order-form
          @onFormSubmit="handleSubmit"
          @onFocusAddress="handleAddressFocus"
          :address="selectedAddress"
          :loading="loading"
        ></order-form>
      </div>
    </up-down-layout>
    <!-- 选择地址弹出框 -->
    <el-dialog :visible.sync="dialogVisible" width="100%" title="地址">
      <div>
        <!-- 百度地图组件 -->
        <!-- <baidu-map class="map" :zoom="5" @ready="handler"></baidu-map> -->
        <!-- <br> -->
        <el-input v-model="selectedAddress" @input="handleChangeAddress"></el-input>
        <!-- 附近地标列表 -->
        <div class="nearby-positions">
          <div
            v-for="(pos, index) in nearbyPosition"
            :key="index"
            class="position-item"
            @click="handlePositionClick(pos)"
          >{{ pos.name }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UpDownLayout from "@/components/up-down-layout";
import CommonHeader from "@/components/common-header";
import OrderForm from "./order-form";
import EthLayer from "../../utils/EthLayer.js";
export default {
  data() {
    return {
      // 控制选择地址弹出框是否显示
      dialogVisible: false,
      // 附近地标
      nearbyPosition: [],
      // 地图是否加载完成
      isMapFinished: false,
      // 选择的地址
      selectedAddress: "",
      address: "",
      location: null,
      loading: false
    };
  },
  methods: {
    handleChangeAddress() {
      this.$axios
        .get(
          "/map/suggestion?region=上海&city_limit=true&output=json&ak=k2EYGytzdGHZanU2b3HRWiY6Bby1GNjt",
          {
            params: {
              query: this.selectedAddress
            }
          }
        )
        .then(res => {
          if (res.data.message == "ok") {
            this.nearbyPosition = res.data.result;
          }
        });
    },
    handleSubmit(form) {
      form["location"] = this.location;
      var house = {
        city: "上海",
        deposit: "200",
        depositWei: "152160000000000000",
        desc: "随时看房",
        descHash: "QmcAHiUWxs3WmjNLMNLyCyvihtsr82s7Di4g7bUKt7xxQF",
        image: "",
        imageHash: "",
        price: "300",
        title: "大三居，主卧朝阳"
      };
      this.loading = true;
      this.createListing(house).then(_ => {
        this.$axios
        .post(this.$api + "/house/releaseHouse", {
          details: form
        })
        .then(res => {
          this.$message({
            message: "发布成功",
            type: "success"
          });
          this.loading = false;
          this.$router.go(-1);
        });
        
      });
      
      
    },
    // 处理点击地址输入框事件
    handleAddressFocus() {
      // this.$axios.get('/map/suggestion?region=上海&city_limit=true&output=json&ak=k2EYGytzdGHZanU2b3HRWiY6Bby1GNjt', {
      //   params: {
      //     query: this.selectedAddress
      //   }
      // }).then(res => {
      //   this.nearbyPosition = res.data.result
      // })
      // // 显示选择地址弹出框
      this.dialogVisible = true;
    },
    // 百度地图ready事件
    // handler({ BMap, map }) {

    //   var myGeo = new BMap.Geocoder(); //创建地址解析实例

    //   var geolocation = new BMap.Geolocation();
    //   // 开启SDK辅助定位
    //   geolocation.enableSDKLocation();

    //   geolocation.getCurrentPosition(r => {
    //     var currentPos = new BMap.Point(r.longitude, r.latitude);
    //     map.centerAndZoom(currentPos, 18);
    //     var marker = new BMap.Marker(currentPos); // 创建标注
    //     map.addOverlay(marker); // 将标注添加到地图中
    //     this.isMapFinished = true;
    //     myGeo.getLocation(
    //       currentPos,
    //       rs => {
    //         this.nearbyPosition = rs.surroundingPois;
    //         this.isMapFinished = true;
    //       },
    //       {
    //         poiRadius: 500,
    //         numPois: 50
    //       }
    //     );
    //   });
    // },
    // 处理地标点击事件
    handlePositionClick(position) {
      this.selectedAddress = position.name;
      this.location = position.location;
      // console.log(position)
      this.dialogVisible = false;
    },
    async createListing(house) {
      let eth = new EthLayer();
      // eth.getUserCredit();

      await eth.createListing(house)
    }
  },
  components: {
    UpDownLayout,
    CommonHeader,
    OrderForm
  }
};
</script>


<style scoped>
/* 百度地图样式 */
.map {
  width: 100%;
  height: 150px;
}
/* 附近地标列表样式 */
.nearby-positions {
  display: flex;
  flex-direction: column;
}

/* 地标样式 */
.nearby-positions .position-item {
  display: block;
  margin-top: 15px;
  font-size: 1.5em;
}

/* 地标样式鼠标悬停样式 */
.nearby-positions .position-item:hover {
  background-color: aliceblue;
}
</style>
