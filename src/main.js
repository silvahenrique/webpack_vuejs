import Vue from 'vue';

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

      let list = [1, 4, 5, 5];

      console.log(list.map((element) => element * 3))
    }
});
