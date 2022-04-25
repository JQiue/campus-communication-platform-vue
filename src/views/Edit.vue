<template>
  <div>
    <el-input type="textarea" autosize placeholder="请输入标题" v-model="title">
    </el-input>
    <div style="margin: 20px 0"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
      v-model="content"
    >
    </el-input>
    <el-button type="primary" @click="send">发送</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async send() {
      const { data } = await this.$http.post("/api/article/add", {
        title: this.title,
        content: this.content,
      });
      if (data.code == 1) {
        this.$message.success("发布成功");
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style>
</style>