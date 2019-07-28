<template>
  <div ref="orderList">
    <div v-for="(item, index) in orderList" 
        :key="index" class="order-card" 
    >
        <order-card :cardInfo=item></order-card>
    </div>
  </div>
</template>

<script>
import OrderCard from "./order-card";
export default {
  props: {
    orderList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    OrderCard
  }
};
</script>

<style scoped>
.order-card {
    margin-bottom: 10px;
}
</style>

