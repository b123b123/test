/*
 * @Description:
 * @Version: 2.0
 * @Author: wuyue.nan
 * @Date: 2022-06-28 17:33:06
 * @LastEditors: WangBo
 * @LastEditTime: 2022-11-17 10:36:53
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src")); // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  publicPath: "./",
  devServer: {
    port: 8080,
    proxy: {
      "/areas": {
        target: "https://geo.datav.aliyun.com",
        changeOrigin: true,
        // pathRewrite: {
        //     '^/api': ''
        // }
      },
    },
  },
};
