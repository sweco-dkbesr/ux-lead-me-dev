import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VRuntimeTemplate from "v-runtime-template";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@sweco/sweco-digital-platforms/dist/css/sweco-bootstrap.css';
import '@sweco/sweco-digital-platforms/dist/js/sweco-bootstrap.js';

import '../src/styles/lead-me.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VRuntimeTemplate);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
