/*
 * @Description: 
 * @Version: 2.0
 * @Author: wuyue.nan
 * @Date: 2022-06-28 17:33:06
 * @LastEditors: wuyue.nan
 * @LastEditTime: 2022-07-06 14:17:34
 */
module.exports = {
    publicPath: "./",
    devServer: {
        port: 8080,
        proxy: {
            '/areas': {
                target: 'https://geo.datav.aliyun.com',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
              }
        }
    }
}