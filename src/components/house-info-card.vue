<template>
  <div class="rent-info-card" @click="$router.push('/house-details/' + cardInfo.house_id)">
    <el-card>
      <div class="info-card">
        <div class="left">
          <img src="../../static/image/house/h2-1.jpg" class="image">
        </div>
        <div class="right">
          <div class="card-title">{{ cardInfo.details.area + " " + cardInfo.details.type }}</div>
          <div class="place-info">
              <div class="description">{{ cardInfo.details.address }}</div>
              <div class="distance"> 1.4 km </div>
          </div>
        <div class="price">价格: {{ cardInfo.monthly_rent }}元/月</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    cardInfo: {
      type: Object
    }
  }
};
</script>

<style scoped>
.rent-info-card {
    margin: 20px 10px;
}
.info-card {
    width: 100%;
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
    font-size: 18px;
    color: #4a4a4a;
    font-weight: 500;
}

.right .place-info {
    font-size: 16px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.right .price {
    font-size: 16px;
    margin-top: 10px;
}
</style>
