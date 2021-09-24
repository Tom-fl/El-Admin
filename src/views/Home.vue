<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-09-22 20:55:44
 * @LastEditTime: 2021-09-22 22:18:49
 * @Email: str-liang@outlook.com
 * @FilePath: \demo\src\views\Home.vue
 * @Environment: Win 10 Python 3.8
 * @Description: 
-->
<template>
  <div>
    <el-container
      class="container"
      v-loading="false"
      element-loading-text="拼命加载中"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      element-loading-spinner="el-icon-loading"
    >
      <!-- 侧边栏 -->
      <Aside :foldAside="foldAside" />
      <!-- 
            direction="vertical"  用于垂直布局
        -->
      <el-container direction="vertical">
        <!-- 头部导航栏 -->
        <Header @foldOrOpenAside="foldOrOpen" />
        <!-- 内容 -->
        <Content />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./home/Header.vue";
import Aside from "./home/Aside.vue";
import Content from "./home/Content.vue";

export default {
  name: "Home",
  components: { Header, Aside, Content },
  created() {
    //在页面加载时读取localStorage里的状态信息
    if (localStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("store"))
        )
      );
    }

    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  data() {
    return {
      foldAside: true
    };
  },
  methods: {
    foldOrOpen(data) {
      this.foldAside = data;
    }
  }
};
</script>

<style>
.container {
  height: 100%;
}
</style>
