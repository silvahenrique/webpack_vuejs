<template>
  <div>
    <h2>Map</h2>
    <p>
      Latitude: {{ $route.params.lat }}
    </p>
    <p>
      Longitude: {{ $route.params.lon }}
    </p>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created() {
      // alert(this.$route.params.lon)
    },
    methods: {
      goHome() {
        this.$router.push('/');
      }
    },
    watch: {
      '$route' (to, from) {
        // alert(this.$route.params.lon)
      }
    }
  }
</script>
