<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4"><h1>校园交流平台</h1></el-col>
        <el-col :span="16">
          <el-menu
            :default-active="activeIndex1"
            mode="horizontal"
            @select="handleSelect1"
          >
            <el-menu-item index="1">广场</el-menu-item>
            <el-menu-item index="2">交易</el-menu-item>
            <el-menu-item index="3">个人中心</el-menu-item>
            <el-menu-item index="4">聊天</el-menu-item>
            <template v-if="this.$store.state.userinfo.isAdmin">
              <el-menu-item index="5">审核中心</el-menu-item>
              <el-menu-item index="6">权限控制</el-menu-item>
            </template>
          </el-menu>
        </el-col>
        <el-col :span="2">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect2"
          >
            <el-submenu index="1">
              <template slot="title">新建</template>
              <el-menu-item index="1-1">发布文章</el-menu-item>
              <el-menu-item index="1-2">发布商品</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="1">
          <el-button size="medium" type="danger" @click="logout"
            >登出</el-button
          >
        </el-col>
      </el-row>
    </el-header>

    <el-container :style="{ padding: '20px 150px' }">
      <el-main>
        <router-view></router-view>
      </el-main>
      <Aside></Aside>
    </el-container>
  </el-container>
</template>

<script>
import Article from "../components/Article";
import Aside from "../components/Aside";
export default {
  data() {
    return {
      activeIndex1: "1",
      activeIndex2: "1",
    };
  },
  components: {
    Article,
    Aside,
  },
  async created() {
    const { data } = await this.$http.get("/api/article/list");
    if (data.code == 0) {
      this.$router.push("/login");
    }
    this.articles = data;
  },
  methods: {
    handleSelect1(index, path) {
      if (index == 1) {
        this.$router.push("/home/article");
      } else if (index == 2) {
        this.$router.push("/home/transaction");
      } else if (index == 3) {
        this.$router.push("/home/userinfo");
      } else if (index == 4) {
        this.$router.push("/home/chat");
      } else if (index == 5) {
        this.$router.push("/home/auditcenter");
      } else if (index == 5) {
        this.$router.push("/home/chat");
      }
    },
    handleSelect2(index, path) {
      if (index == "1-1") {
        this.$router.push("/home/edit");
      }
    },
    async logout() {
      const { data } = await this.$http.post("/api/user/logout");
      if (data.code == 1) {
        this.$message({
          type: "error",
          message: "登出成功",
        });
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  line-height: 60px;
}

.el-main {
  color: #333;
}
</style>