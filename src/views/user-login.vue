<template>
  <div>
    <my-header></my-header>
    <div id="user-login">
      <el-form ref="user-login" v-model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" :rules="rules.password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('user-login')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/header';
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
          password: [
              {
                  required: true, message: '用户名不能为空'
              },
              {
                  type: 'number', message: '用户名必须为数字值'
              }
          ]
      }
    };
  },
  methods: {
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
              if(valid) {
                  alert('submit!');
              } else {
                  console.log('error submit!');
                  return false;
              }
          })
      }
  },
  components: {
      myHeader
  }
};
</script>

<style scoped>
#user-login {
    left: 20%;
    position: absolute;
    width: 60%;
    padding: 20px;
}
</style>
