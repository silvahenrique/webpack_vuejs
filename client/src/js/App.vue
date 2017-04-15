<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script scoped>
  export default {
    name: 'app',
    data() {
      return {
        title: 'App'
      }
    }
  }
</script>

<style>
  h1 {
    color: #cceaaf;
  }
</style>
