require('./bootstrap');

// Creating a Vue instance
const app = new Vue({
    el: '#app',
    data: {
      message: 'I\'m a Vue Model!'
    },
    created() {
      console.log("created");
    },
    mounted() {
      console.log("mounted");
    }
});
