import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import {routes} from './router'
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
import '../src/styles/ribbons.css';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(VRuntimeTemplate);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
