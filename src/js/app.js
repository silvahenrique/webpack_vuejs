require('./bootstrap');

// Creating a Vue instance
const app = new Vue({
    el: '#app',
    data: {
      message: 'Oi eu sou um Vue Model!'
    },
    created() {
      console.log("created");
    },
    mounted() {
      console.log("mounted");
    }
});
