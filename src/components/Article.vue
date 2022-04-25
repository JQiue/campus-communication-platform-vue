<template>
  <div>
    <el-tabs>
      <el-tab-pane label="最新" name="first"> 1</el-tab-pane>
      <el-tab-pane label="最热" name="second"> 2</el-tab-pane>
    </el-tabs>
    <div v-if="isViewing">
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
      <ArticleDetail :article_id="article_id"></ArticleDetail>
    </div>
    <template v-else>
      <article v-for="article in articles" :key="article.id">
        <h2>
          <el-link
            type="primary"
            style="font-size: 1.3rem"
            @click="viewArticle(article.id)"
            >{{ article.title }}</el-link
          >
        </h2>
        <span style="font-size: 0.5rem">浏览量</span>
      </article>
    </template>
  </div>
</template>

<script>
import ArticleDetail from "../components/ArticleDetail.vue";
export default {
  components: {
    ArticleDetail,
  },
  data() {
    return {
      articles: [],
      isViewing: false,
      article_id: null,
      article_title: "",
      article_content: "",
    };
  },
  async created() {
    const { data } = await this.$http.get("/api/article/list");
    if (data.code == 0) {
      this.$router.push("/login");
    }
    this.articles = data;
  },
  methods: {
    viewArticle(id) {
      this.article_id = id;
      this.isViewing = true;
    },
    goBack() {
      this.isViewing = false;
    },
  },
};
</script>

<style>
article {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto 1.25rem;
  padding: 1rem 1.25rem;
  border-radius: 0.4rem;
  background: #fff;
  box-shadow: 0 1px 3px 1px var(--card-shadow);
  text-align: left;
}
</style>