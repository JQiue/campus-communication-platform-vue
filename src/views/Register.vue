<template>
  <div class="register">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.confirm_password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="onSubmit">注册</el-button>
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
        confirm_password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      const result = await this.$http.post("/api/user/register", {
        username: this.form.username,
        password: this.form.password,
      });
      if (result.data.code == 1) {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
.register {
  width: 350px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>