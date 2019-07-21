<template>
  <up-down-layout>
    <div slot="header">
      <common-header title="租房信息" :right-method="() => {this.isShowMore = !this.isShowMore}"></common-header>
    </div>
    <div slot="body">
      <div class="image-carousel">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 3" :key="item">
            <img :src="'../../static/image/house/h1-' + item + '.jpg'" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <rent-info-details-card
        :info-details="infoDetails"
        v-if="finished"
        @onOrderSubmit="handleSubmit"
      ></rent-info-details-card>
      <div v-if="isShowMore" class="more">More</div>
    </div>
  </up-down-layout>
</template>

<script>
import rentInfoDetailsCard from "@/components/rent-info-details-card";
import infoDetailsList from "@/data/infoDetails.json";

import UpDownLayout from "@/components/up-down-layout";
import CommonHeader from "@/components/common-header";
export default {
  data() {
    return {
      isShowMore: false,
      infoDetails: {},
      finished: false
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
            type: 'success'
          })
        } else {
          this.$message({
            message: "租赁失败",
            type: 'error'
          })
        }
      });
    }
  },
  components: {
    rentInfoDetailsCard,
    UpDownLayout,
    CommonHeader
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
</style>
