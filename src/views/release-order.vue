<template>
  <up-down-layout>
    <div slot="header">
      <common-header title="发布订单" :show-right="false"></common-header>
    </div>
    <div slot="body">
      <order-form @onFormSubmit="handleSubmit"></order-form>
    </div>
  </up-down-layout>
</template>

<script>
import UpDownLayout from "@/components/up-down-layout";
import CommonHeader from "@/components/common-header";
import OrderForm from "@/components/order-form";

export default {
  data() {
    return {};
  },
  methods: {
    handleSubmit(form) {
      this.$axios.post(
        this.$api + "/house/releaseHouse",
        {
          details: form
        },
        (err, result) => {
          if (err) {
            console.log(err);
          }
          {
            console.log(result);
          }
        }
      );
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
</style>
