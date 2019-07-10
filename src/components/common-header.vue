<template>
  <div class="header">
    <div class="left">
      <i class="el-icon-arrow-left" @click="$router.go(-1)">返回</i>
    </div>
    <div class="title">
      <h4>{{ title }}</h4>
    </div>
    <div class="right">
      <i :class="rightIcon" @click="rightMethod"></i>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '未命名标题'
        },
        rightIcon: {
            type: String,
            default: 'el-icon-more'
        },
        rightMethod: {
            type: Function,
            default: () => {
                console.log("default method")
            }
        }
    }
};
</script>

<style scope>

.header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    z-index: 1000;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
}

.left {
    flex: 1;
    color: #909399;
}

.right {
    flex: 1;
    color: #909399;
    text-align: end;
}

.title {
    flex: 1;
    text-align: center;
}
</style>