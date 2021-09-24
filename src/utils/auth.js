/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-09-22 21:40:45
 * @LastEditTime: 2021-09-22 21:41:57
 * @Email: str-liang@outlook.com
 * @FilePath: \demo\src\utils\auth.js
 * @Environment: Win 10 Python 3.8
 * @Description:
 */
import Cookies from "js-cookie";

const TokenKey = "Admin-Token";

// 获取 token
export function getToken() {
  return Cookies.get(TokenKey);
}

// 设置 token
export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

// 移除 token
export function removeToken() {
  return Cookies.remove(TokenKey);
}
