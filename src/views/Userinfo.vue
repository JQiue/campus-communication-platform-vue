<template>
  <el-container>
    <el-aside>
      <!-- <div><el-avatar :size="100" :src="circleUrl"></el-avatar></div> -->
      <div>名字</div>
      <div>头像</div>
      <div>头像</div>
    </el-aside>
    <el-main>
      <div>
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户管理" name="first">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="昵称">
                <el-input v-model="form.nickname"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-select v-model="form.sex" placeholder="请选择性别">
                  <el-option label="男" value="0"></el-option>
                  <el-option label="女" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="简介">
                <el-input type="textarea" v-model="form.intro"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="updateInfo"
                  >更新信息</el-button
                >
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="文章管理" name="second">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="标题" width="180">
                <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.title }}</el-tag>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="商品管理" name="third">商品管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"
            >定时任务补偿</el-tab-pane
          >
        </el-tabs>
      </div>
      <div></div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      form: {
        nickname: "",
        sex: "",
        email: "",
        intro: "",
      },
      tableData: [],
    };
  },
  async created() {
    await this.getUserInfo();
    await this.getArticleList();
  },
  methods: {
    async getUserInfo() {
      const { data } = await this.$http.get("/api/user/get");
      this.form.nickname = data.nickname;
      this.form.sex = data.sex;
      this.form.email = data.email;
    },
    async updateInfo() {
      const { data } = await this.$http.post("/api/user/update", {
        nickname: this.form.nickname,
        sex: this.form.sex,
        email: this.form.email,
      });
      if (data.code == 1) {
        this.$message.success("更新成功");
        this.getUserInfo();
      }
    },
    async getArticleList() {
      const { data } = await this.$http.get("/api/article/list/user", {
        user_id: 1,
      });
      this.tableData = data;
    },
    async handleDelete(index, row) {
      const { data } = await this.$http.post("/api/article/remove", {
        id: row.id,
      });
      if (data.code == 1) {
        this.$message.success("删除成功");
        this.getArticleList();
      }
    },
  },
};
</script>

<style>
</style>