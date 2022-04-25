<template>
  <el-header>
    <el-row>
      <el-col :span="4"><h1>校园交流平台</h1></el-col>
      <el-col :span="18">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">广场</el-menu-item>
          <el-menu-item index="2">交易</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        个人中心
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {};
</script>

<style>
</style>