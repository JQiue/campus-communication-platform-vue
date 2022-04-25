<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button type="danger" @click="toRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      const { data } = await this.$http.post("/api/user/login", {
        username: this.form.username,
        password: this.form.password,
      });
      if (data.code == 1) {
        this.$message({
          type: "success",
          message: "登陆成功",
        });
        this.$store.state.userinfo = data.data;
        localStorage.setItem("nickname", data.data.nickname);
        const { data: permission } = await this.$http.get(
          "/api/permission/get"
        );
        console.log(permission);
        if (permission.roleInfo.role_key == "admin") {
          this.$store.state.userinfo.isAdmin = true;
        }
        this.$router.push("/home");
      } else {
        this.$message({
          type: "error",
          message: "登陆失败",
        });
      }
    },
    toRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style>
.login {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>