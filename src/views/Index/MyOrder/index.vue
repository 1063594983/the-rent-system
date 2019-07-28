<template>
  <up-down-layout>
    <div slot="header">
      <common-header :show-back="false" 
            :show-right="false"
            title="我的订单">
      </common-header>
    </div>
    <div slot="body" class="content">
      <order-card-list :order-list="orderList"></order-card-list>
    </div>
  </up-down-layout>
</template>

<script>
import OrderCardList from './order-card-list'
import UpDownLayout from '@/components/up-down-layout'
import CommonHeader from '@/components/common-header'
export default {
  data() {
    return {
      orderList: []
    };
  },
  created() {
    this.$axios.get(this.$api + "/order/getOrders", {
      params: {
        renter: this.$cookies.get("username")
      }
    }).then(res => {
      this.orderList = res.data;
    })
  },
  components: {
    OrderCardList,
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

.content {
  margin-bottom: 50px;
}
</style>
