import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/public.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI,{ size: 'small' });
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 预览  git push -u origin gh-pages