import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAxios from 'vue-axios'
import VueSimpleAlert from 'vue-simple-alert'


Vue.use(VueAxios, axios)
Vue.use(VueSimpleAlert)
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
