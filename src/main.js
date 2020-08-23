import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSimpleAlert from 'vue-simple-alert'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)
Vue.use(VueAxios, axios)
Vue.use(VueSimpleAlert)
Vue.config.productionTip = false


new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
