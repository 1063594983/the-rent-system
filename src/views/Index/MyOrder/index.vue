<template>
  <up-down-layout>
    <div slot="header">
      <common-header :show-back="false" 
            :show-right="true"
            title="我的订单"
            :right-method="show">
      </common-header>
    </div>
    <!-- 我的订单列表 -->
    <div slot="body" class="content">
      <order-card-list :order-list="orderList" ref="order_list"></order-card-list>
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
    console.log(this.$route.meta.scrollTop)
    if (this.$route.meta.scrollTop == 0) {
      this.$axios.get(this.$api + "/order/getOrders", {
      params: {
        renter: this.$cookies.get("username")
      }
    }).then(res => {
      this.orderList = res.data;
    })
    } else {
      document.documentElement.scrollTop = this.$route.meta.scrollTop;
    }
    
  },

  methods: {
    show() {
      console.log(document.documentElement.scrollTop)
    }
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
