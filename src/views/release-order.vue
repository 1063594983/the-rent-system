<template>
  <div>
    <up-down-layout>
      <div slot="header">
        <common-header title="发布订单"></common-header>
      </div>
      <div slot="body">
          <order-form></order-form>
      </div>
    </up-down-layout>
  </div>
</template>

<script>
import UpDownLayout from "@/components/up-down-layout";
import CommonHeader from "@/components/common-header";
import OrderForm from '@/components/order-form'
export default {
  components: {
    UpDownLayout,
    CommonHeader,
    OrderForm
  }
};
</script>


<style scoped>

</style>
