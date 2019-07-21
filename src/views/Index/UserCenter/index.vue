<template>
  <div>
    <div>
      <el-card class="user-bar">
        <div class="user-info">
          <div class="user-img">
            <img style="width: 30%; height: 90%;" src="../../../../static/image/head.jpg">
            <div class="username-panel">
              <div class="username">{{ $cookies.get("username") }}</div>
              <div class="credit">信誉度: 良好<i class="el-icon-arrow-right"></i></div>
            </div>
          </div>
          <div class="info-btn">
            <el-button>个人资料</el-button>
            <el-button @click="$router.push({
              name: 'user-login'
            })">退出登录</el-button>
          </div>
        </div>
        <div class="user-tabs">
          <div class="tab-item">
            所有订单
          </div>
          |
          <div class="tab-item">
            我的收藏
          </div>
          |
          <div class="tab-item">
            最近浏览
          </div>
        </div>
      </el-card>
      <el-button class="release-order" @click="$router.push({
          name: 'release-order'
      })">
        发布租房信息
      </el-button>
    </div>
  </div>
</template>

<script>
import cardList from "@/data/cardList.json";

export default {
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.user-bar {
  height: 200px;
}

.user-info {
  height: 120px;
  width: 100%;
  /*border: 1px solid red;*/
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.user-img {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.username-panel {
  margin-left: 15px;
}

.username {
  font-size: 20px;
}

.credit {
  border: 1px solid gray;
  display: block;
  background-color: gray;
  border-radius: 5px;
  color: white;
  font-size: 10px;
}

.user-tabs {
  height: 50px;
  width: 100%;
  /*border: 1px solid red;*/
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.release-order {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background-color: rgb(47, 192, 192);
  color: white;
}
</style>
