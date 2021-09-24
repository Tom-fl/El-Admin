/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-09-22 11:58:03
 * @LastEditTime: 2021-09-22 17:51:09
 * @Email: str-liang@outlook.com
 * @FilePath: \demo\babel.config.js
 * @Environment: Win 10 Python 3.8
 * @Description:
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      { libraryName: "element-ui", styleLibraryName: "theme-chalk" }
    ]
  ]
};
