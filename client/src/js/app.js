// require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './App.vue';
import { routes } from './router-config';

// Install Vue Router
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  // mode: 'history'
});

// Creating a Vue instance
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
