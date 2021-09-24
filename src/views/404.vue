<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-09-22 21:34:27
 * @LastEditTime: 2021-09-22 21:54:48
 * @Email: str-liang@outlook.com
 * @FilePath: \demo\src\views\404.vue
 * @Environment: Win 10 Python 3.8
 * @Description: 
-->
<template>
  <div>
    <h1>404</h1>
    <el-button @click="handleHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleHome() {
      this.$router.replace("/Home");
    }
  }
};
</script>

<style></style>
