<template>
  <div>
    <up-down-layout>
      <!-- 头部 -->
      <div slot="header">
        <common-header title="租房信息" :right-method="() => {this.isShowMore = !this.isShowMore}"></common-header>
      </div>
      <!-- 内容 -->
      <div slot="body">
        <!-- 轮播图 -->
        <div class="image-carousel">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
              <img :src="'../../../static/image/house/h1-' + item + '.jpg'" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 房屋详细信息、房东信息及联系面板 -->
        <rent-info-details-card :info-details="infoDetails" v-if="finished"></rent-info-details-card>
        <!-- 租赁按钮 -->
        <el-button class="rent-btn" type="text" @click="dialogVisible = true">租赁</el-button>
      </div>
    </up-down-layout>
    <!-- 租赁表单弹出框 -->
    <el-dialog :visible.sync="dialogVisible" title="租赁" width="80%">
      <!-- 租赁表单 -->
      <rent-form :monthly-rent="infoDetails.monthly_rent" @onSubmit="handleSubmit"></rent-form>
    </el-dialog>
    <!-- 更多面板 -->
    <div v-if="isShowMore" class="more">More</div>
  </div>
</template>

<script>
import rentInfoDetailsCard from "@/components/rent-info-details-card";
import infoDetailsList from "@/data/infoDetails.json";

import UpDownLayout from "@/components/up-down-layout";
import CommonHeader from "@/components/common-header";
import RentForm from "./rent-form";
export default {
  data() {
    return {
      isShowMore: false,
      infoDetails: {},
      finished: false,
      dialogVisible: false,
      monthNum: 1,
      startTime: new Date()
    };
  },
  created() {
    this.$axios
      .get(this.$api + "/house/getHouseById", {
        params: {
          house_id: this.$route.params["id"]
        }
      })
      .then(res => {
        this.infoDetails = res.data;
        this.finished = true;
      });
  },
  methods: {
    handleSubmit(option) {
      var options = {
        house_id: this.$route.params["id"],
        renter: this.$cookies.get("username"),
        start_time: option.startTime,
        lasting_months: option.monthNum,
        total_money: option.monthNum * this.infoDetails.monthly_rent
      };
      this.$axios.post(this.$api + "/order/addOrder", options).then(res => {
        if (res.data == "Success") {
          this.$message({
            message: "租赁成功",
            type: "success"
          });
          this.dialogVisible = false;
        } else {
          this.$message({
            message: "租赁失败",
            type: "error"
          });
          this.dialogVisible = false;
        }
      });
    }
  },
  components: {
    rentInfoDetailsCard,
    UpDownLayout,
    CommonHeader,
    RentForm
  }
};
</script>

<style scoped>
@keyframes showMore {
  from {
    height: 0;
  }

  to {
    height: 100px;
  }
}

.more {
  animation: showMore 0.5s linear;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background: white;
  z-index: 10;
}

img {
  height: 100%;
}

.rent-btn {
  width: 100%;
  color: white;
  background: #5980ce;
  border: none;
}
</style>
