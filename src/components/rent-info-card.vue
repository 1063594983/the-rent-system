<template>
  <div class="rent-info-card" @click="$router.push('/rent-info-details')">
    <el-card>
      <div class="info-card">
        <div class="left">
          <img src="../assets/logo.png" class="image">
        </div>
        <div class="right">
          <div class="card-title">凡仔汉堡</div>
          <div class="place-info">
              <div class="description">长风公园/华师大 两居室</div>
              <div class="distance">1.4km</div>
          </div>
        <div>价格</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
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
</style>
