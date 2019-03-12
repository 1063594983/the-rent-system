<template>
  <div class="rent-info-card" @click="$router.push('/rent-info-details/' + cardInfo.id)">
    <el-card>
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
        <div class="price">价格: {{ cardInfo.price }}元/月</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: '../../static/image/house/h1-1.jpg'
    }
  },
  props: {
    cardInfo: {
      type: Object,
      default: () => {
        return {
          imgUrl: '../../static/image/house/h1-1.jpg',
          title: '南亭佳苑 2室1厅1卫',
          address: '金展路2146弄',
          distance: '1.4km',
          price: 1600,
          id: 1
        }
      }
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
