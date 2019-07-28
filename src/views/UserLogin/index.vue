<template>
  <div>
    <up-down-layout>
      <div slot="header">
        <common-header title="用户登录" :show-back="false" :show-right="false"></common-header>
      </div>
      <div slot="body">
        <div id="user-login">
          <el-form ref="user-login" :model="formFiled" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="formFiled.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="formFiled.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('user-login')">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </up-down-layout>
  </div>
</template>

<script>
import CommonHeader from "@/components/common-header";
import UpDownLayout from "@/components/up-down-layout";
export default {
  data() {
    return {
      formFiled: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    if(this.$cookies.get("username")) {
      this.$router.push({
        name: 'index'
      })
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post(this.$api + "/user/login", {
              username: this.formFiled.username,
              password: this.formFiled.password
            })
            .then(res => {
              if (res.data == "Success") {
                this.$cookies.set("username", this.formFiled.username);
                this.$router.push({
                  name: "index"
                });
                
              } else {
                this.$message({
                  message: "用户名或密码错误",
                  type: 'error'
                })
              }
            });
        } else {
          return false;
        }
      });
    }
  },
  components: {
    CommonHeader,
    UpDownLayout
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
