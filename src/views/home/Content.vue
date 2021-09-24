<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-09-22 22:10:29
 * @LastEditTime: 2021-09-24 12:02:33
 * @Email: str-liang@outlook.com
 * @FilePath: \demo\src\views\home\Content.vue
 * @Environment: Win 10 Python 3.8
 * @Description: 
-->
<template>
  <div class="content">
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
export default {
  name: "Content",
  components: { Tab }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  border: 1px solid #000;
}
</style>
