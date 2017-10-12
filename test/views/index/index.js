// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Index.vue'
import router from './router'
import axios from 'axios'; // 引入http

// import VCharts from 'v-charts';  //  引入eleme v-charts

const FastClick = require('fastclick');
FastClick.attach(document.body);

// Vue.use(VCharts);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
