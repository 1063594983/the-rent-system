<template>
  <el-card>
    <div class="card" v-if="houseDetails">
      <div class="info-card">
        <div class="left">
          <img :src="imgUrl" class="image" />
        </div>
        <div class="right">
          <div class="card-title">{{ houseDetails.details.part + " " +houseDetails.details.type }}</div>
          <div class="place-info">
            <div class="description">{{ cardInfo.address }}</div>
            <div class="distance">{{ cardInfo.distance }}</div>
          </div>
          <div>租金: {{ cardInfo.total_money }}元</div>
          <div>租期: {{ cardInfo.lasting_months }}个月</div>
        </div>
      </div>
      <div>
        <el-button>取消订单</el-button>
        <el-button>确定订单</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>

export default {
  data() {
    return {
      imgUrl: "../../static/image/house/h1-1.jpg",
      houseDetails: null
    };
  },
  props: {
    cardInfo: {
      type: Object,
      default: () => {
        return {
          imgUrl: "../../static/image/house/h1-1.jpg",
          title: "南亭佳苑 2室1厅1卫",
          address: "金展路2146弄",
          distance: "1.4km",
          price: 1600
        };
      }
    }
  },
  created() {
      this.$axios.get(this.$api + "/house/getHouseById", {
          params: {
              house_id: this.cardInfo.house_id
          }
      }).then(res => {
          this.houseDetails = res.data;
      })
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
