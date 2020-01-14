import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from '@/assets/lib/index.js';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false
//初始化css样式
import '@/styles/index.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
