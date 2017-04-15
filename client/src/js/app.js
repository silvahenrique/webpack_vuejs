// require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
// import { routes } from './router-config';

import Home from './Home.vue';
import About from './About.vue';
import Map from './Map.vue';

// Install Vue Router
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/map', component: Map },
];

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
