<template>
  <div>
    位置:
    <el-input type="text" v-model="positionText"></el-input>
    <el-button @click="getPosition">定位</el-button>
    <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positionText: "",
      center: { lng: 0, lat: 0 }, //经纬度
      zoom: 3, //地图展示级别,
      BMap: null
    };
  },
  created() {},
  mounted() {},
  methods: {
    getPosition() {
      
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //       position => {
    //         console.log(position);
    //       },
    //       err => {
    //         console.log(err);
    //       }
    //     );
    //   } else {
    //     console.log("failed");
    //   }
    },
    handler({ BMap, map }) {
      //   this.BMap = BMap;
      //   var geolocation = new BMap.Geolocation();
      var myGeo = new BMap.Geocoder(); //创建地址解析实例

      var geolocation = new BMap.Geolocation();
      // 开启SDK辅助定位
      geolocation.enableSDKLocation();

      geolocation.getCurrentPosition(r => {
        var currentPos = new BMap.Point(r.longitude, r.latitude);
        myGeo.getLocation(
          currentPos,
          rs => {
            console.log(rs);
          },
          {
            poiRadius: 500,
            numPois: 50
          }
        );
      });

      //   myGeo.getLocation(new BMap.Point(116.404, 39.915), (rs) => {
      //       console.log(rs);
      //   },{
      //       poiRadius: 500,
      //       numPois: 12
      //   });
      //   var local = new BMap.LocalSearch("上海", {
      //       onSearchComplete: res => {
      //           console.log(res);
      //       }
      //   })
      //   local.search("公园")
    }
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
}
</style>

