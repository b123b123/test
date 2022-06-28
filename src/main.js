/*
 * @Description: 
 * @Version: 2.0
 * @Author: wuyue.nan
 * @Date: 2022-04-08 11:00:11
 * @LastEditors: wuyue.nan
 * @LastEditTime: 2022-06-28 17:30:11
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import wbColor from 'wb-color';
import $ from 'jquery';

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$wbColor = wbColor;
window.$ = $;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
