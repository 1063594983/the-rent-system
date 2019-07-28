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
        <order-form @onFormSubmit="handleSubmit" @onFocusAddress="handleAddressFocus" :address="selectedAddress"></order-form>
      </div>
    </up-down-layout>
    <!-- 选择地址弹出框 -->
    <el-dialog :visible.sync="dialogVisible" width="100%">
      <div>
        <!-- 百度地图组件 -->
        <baidu-map class="map" :zoom="5" @ready="handler"></baidu-map>
        <!-- 附近地标列表 -->
        <div class="nearby-positions">
          <div v-for="(pos, index) in nearbyPosition" :key="index" class="position-item" @click="handlePositionClick(pos.title)">{{ pos.title }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UpDownLayout from "@/components/up-down-layout";
import CommonHeader from "@/components/common-header";
import OrderForm from "./order-form";

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
      selectedAddress: ''
    };
  },
  methods: {
    handleSubmit(form) {
      this.$axios.post(
        this.$api + "/house/releaseHouse",
        {
          details: form
        }).then(res => {
        this.$message({
              message: '发布成功',
              type: 'success'
            })
            this.$router.go(-1);
      });
    },
    // 处理点击地址输入框事件
    handleAddressFocus() {
      // 显示选择地址弹出框
      this.dialogVisible = true;
    },
    // 百度地图ready事件
    handler({ BMap, map }) {
      var myGeo = new BMap.Geocoder(); //创建地址解析实例

      var geolocation = new BMap.Geolocation();
      // 开启SDK辅助定位
      geolocation.enableSDKLocation();

      geolocation.getCurrentPosition(r => {
        var currentPos = new BMap.Point(r.longitude, r.latitude);
        map.centerAndZoom(currentPos, 18);
        var marker = new BMap.Marker(currentPos); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        this.isMapFinished = true;
        myGeo.getLocation(
          currentPos,
          rs => {
            this.nearbyPosition = rs.surroundingPois;
            this.isMapFinished = true;
          },
          {
            poiRadius: 500,
            numPois: 50
          }
        );
      });
    },
    // 处理地标点击事件
    handlePositionClick(address) {
      this.selectedAddress = address;
      this.dialogVisible = false;
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
