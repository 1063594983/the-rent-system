<template>
  <div>
    <!-- 发布租房信息表单 -->
    <el-form ref="order-form" :model="form">
      <el-form-item label="租金(元/月">
        <el-input v-model="form.price"></el-input>
      </el-form-item>

      <el-form-item label="租赁模式">
        <el-radio-group v-model="form.payMethod" size="medium">
          <el-radio label="押一付三"></el-radio>
          <el-radio label="押一付五"></el-radio>
          <el-radio label="无押金"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出租方式">
        <el-radio-group v-model="form.rentMethod" size="medium">
          <el-radio label="整租"></el-radio>
          <el-radio label="单租"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="户型">
        <br>
        <!-- <el-input v-model="form.type" placeholder="?室?厅?卫"></el-input> -->
        <el-row class="house-type">
          <el-col :span="6"><el-input v-model="type.num1"></el-input></el-col>
          <el-col :span="2">室</el-col>
          <el-col :span="6"><el-input v-model="type.num2"></el-input></el-col>
          <el-col :span="2">厅</el-col>
          <el-col :span="6"><el-input v-model="type.num3"></el-input></el-col>
          <el-col :span="2">卫</el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="朝向">
        <el-radio-group v-model="form.direction" size="medium">
          <el-radio label="南北"></el-radio>
          <el-radio label="东西"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="建筑面积(平方米)">
        <el-col :span="10">
          <el-input v-model="form.area"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="楼层">
        <el-col :span="10" :offset="4">
          <el-input v-model="form.height"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="小区">
        <el-input v-model="form.part"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="address" @focus="onFocusAddress"></el-input>
      </el-form-item>
      <el-form-item label="其他">
        <el-input type="textarea" v-model="form.other"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" :loading="loading">立即发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        price: "2000",
        payMethod: "押一付三",
        rentMethod: "整租",
        type: "",
        area: "20",
        direction: "南北",
        height: "5",
        part: "XX小区",
        address: "",
        other: "备注"
      },
      type: {
        num1: 1,
        num2: 1,
        num3: 1
      }
    };
  },
  props: {
    address: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submitForm(formName) {
      this.form.address = this.address;
      this.form.type = this.type.num1 + "室" + this.type.num2 + "厅" + this.type.num1 + "卫";
      this.$emit("onFormSubmit", this.form);
    },
    // 当点击地址输入框后
    onFocusAddress() {
      // 触发事件
      this.$emit("onFocusAddress");
    }
  }
};
</script>

<style scoped>
.house-type {
  text-align: center;
}
</style>
