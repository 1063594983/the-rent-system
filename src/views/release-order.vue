<template>
  <el-container>
    <el-header class="el-header">
      <div class="header">
        <div class="left">
          <i class="el-icon-arrow-left" @click="$router.go(-1)">返回</i>
        </div>
        <div class="title">
          租房信息
        </div>
        <div class="right">
          <i class="el-icon-more"></i>
        </div>
      </div>
    </el-header>
    <el-main>
      <order-form></order-form>
    </el-main>
  </el-container>
</template>

<script>
import OrderForm from "@/components/order-form";
import CommonHeader from "@/components/common-header";
export default {
  data() {
    return {};
  },
  components: {
    OrderForm,
    CommonHeader
  }
};
</script>

<style scoped>
.el-header {
    position: fixed;
}
.header {
    border: 1px solid red;
    display: flex;
    height: 56px;
    width: 100%;
    align-items: center;
    position: fixed;
    border-bottom: 1px solid #eaeaea;
    margin: -8px -8px 0;
    padding: 0 16px;
    z-index: 1000;
    background-color: white;
    box-sizing: border-box;
}
</style>