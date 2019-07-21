<template>
<!-- 租赁表单 -->
  <div class="rent-details">
    <div class="rent-details-item">
        <!-- 开始租房时间 -->
      <el-col :span="8">开始时间:</el-col>
      <el-col :span="16">
        <el-date-picker v-model="startTime" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
    </div>
    <br />
    <!-- 租房持续时间 -->
    <div class="rent-details-item">
      <el-col :span="8">租期(月):</el-col>
      <el-col :span="16">
        <el-input-number v-model="monthNum" :min="1" :max="12" label="月份"></el-input-number>
      </el-col>
    </div>
    <br />
    <!-- 租金 -->
    <div class="rent-details-item">
      <el-col :span="8">租金(元)</el-col>
      <el-col :span="16">
        <div style="font-size: 20px; color:red;">￥{{ monthlyRent * monthNum }}</div>
      </el-col>
    </div>
    <br />
    <div>
      <el-button class="confirm-btn" @click="confirmOrder">确定订单</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: new Date(),
      monthNum: 1
    };
  },
  props: {
    monthlyRent: {
      type: Number,
      require: true
    }
  },
  methods: {
    confirmOrder() {
      this.$emit("onSubmit", {
          startTime: this.startTime.getTime(),
          monthNum: this.monthNum
      })
    }
  }
};
</script>

<style scoped>
.rent-details {
  display: flex;
  flex-direction: column;
}

.rent-details-item {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
</style>
