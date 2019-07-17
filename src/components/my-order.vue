<template>
  <up-down-layout>
    <div slot="header">
      <common-header :show-back="false" 
            :show-right="false"
            title="我的订单">
      </common-header>
    </div>
    <div slot="body">
      <div>
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
    </div>
  </up-down-layout>
</template>

<script>
import UpDownLayout from '@/components/up-down-layout'
import CommonHeader from '@/components/common-header'
export default {
  data() {
    return {
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
  components: {
    UpDownLayout,
    CommonHeader
  }
};
</script>

<style scoped>
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
