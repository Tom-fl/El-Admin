<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-09-22 20:57:59
 * @LastEditTime: 2021-09-24 12:23:06
 * @Email: str-liang@outlook.com
 * @FilePath: \demo\src\views\Login.vue
 * @Environment: Win 10 Python 3.8
 * @Description: 
-->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getToken, setToken } from "@/utils/auth.js";

export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      setToken(this.form.name);
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>

<style></style>
