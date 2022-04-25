<template>
  <div>
    <h2 style="text-align: center">{{ title }}</h2>
    <div>{{ article_id }}</div>
    <div>{{ username }}</div>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: ["article_id"],
  data() {
    return {
      title: "",
      content: "",
      username: "",
    };
  },
  updated() {},
  watch: {
    article_id: {
      immediate: true,
      async handler(newValue, oldValue) {
        const { data } = await this.$http.post("/api/article/detail", {
          id: newValue,
        });
        this.title = data.title;
        this.content = data.content;
        this.username = data.username;
      },
    },
  },
};
</script>

<style>
</style>