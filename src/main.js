import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";
import Vant,{Lazyload} from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Lazyload);

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
