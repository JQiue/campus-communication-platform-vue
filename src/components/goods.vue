<template>
  <div>
    <el-row :gutter="20">
      <el-col
        style="margin-bottom: 10px"
        :span="6"
        v-for="goods in goodsList"
        :key="goods.id"
      >
        <el-card style="text-align: center">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <span>{{ goods.name }}</span>
          <p>{{ goods.desc }}</p>
          <p>￥{{ goods.price }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      const { data } = await this.$http.get("/api/goods/list");
      this.goodsList = data;
    },
  },
};
</script>

<style>
</style>