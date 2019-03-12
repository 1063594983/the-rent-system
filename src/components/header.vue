<template>
  <div id="header">
    <div class="left">
      <i class="el-icon-arrow-left">返回</i>
    </div>
    <div class="title">
      <h4>租房信息</h4>
    </div>
    <div class="right">
      <i class="el-icon-search" @click="$router.push('/search')"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
  /*border: 1px solid red;*/
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.left {
  color: #909399;
}

.title {
  margin: 0 auto;
}

.right {
  color: #909399;
}
</style>
