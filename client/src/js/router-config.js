import Home from './Home.vue';
import About from './About.vue';
import Map from './Map.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/map/:lat/:lon', component: Map },
];
