<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>

    <router-link to="/">Home</router-link>
    <router-link to="/map/40.00/90.00">Map</router-link>
    <router-link to="/map/70.00/120.00">Map</router-link>
    <router-link to="/about">About</router-link>

    <router-view></router-view>
  </div>
</template>

<script scoped>
  export default {
    name: 'app',
    data() {
      return {
        title: 'My Vue App'
      }
    }
  }
</script>

<style>
</style>
