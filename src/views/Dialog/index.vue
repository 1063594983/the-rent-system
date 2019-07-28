<template>
<!-- 聊天页面 -->
  <div>
      <!-- 上下布局 -->
    <up-down-layout>
        <!-- 头部 -->
      <div slot="header">
        <common-header title="马云"></common-header>
      </div>
      <!-- 聊天内容 -->
      <div slot="body" class="content">
        <dialog-content></dialog-content>
      </div>
    </up-down-layout>
    <!-- 底部 -->
    <div class="footer">
        <!-- 输入框 -->
      <div class="input">
        <el-input></el-input>
      </div>
      <!-- 发送按钮 -->
      <div class="btn">
        <el-button round>发送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// 导入头部组件
import CommonHeader from "@/components/common-header";
// 导入布局组件
import UpDownLayout from "@/components/up-down-layout";
// 导入聊天内容组件
import DialogContent from './dialog-content'

export default {
  components: {
    CommonHeader,
    UpDownLayout,
    DialogContent
  }
};
</script>

<style scoped>
.content {
  margin-bottom: 50px;
}

.footer {
  height: 45px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  z-index: 10;
}

.footer .input {
    flex: 5;
}

.footer .btn {
    flex: 2;
}
</style>
