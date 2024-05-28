import Vue from 'vue'
import App from './App.vue'
//import denglu from './denglu.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts/core';
import { GlobeComponent } from 'echarts-gl/components';
import { CanvasRenderer } from 'echarts/renderers';
import VueSeamlessScroll from 'vue-seamless-scroll'

echarts.use([GlobeComponent, CanvasRenderer]);
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(VueSeamlessScroll)

//axios.defaults.baseURL = 'http://localhost:8055'
Vue.use(ElementUI).use(dataV)
//Vue.use(VueAxios,axios);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

