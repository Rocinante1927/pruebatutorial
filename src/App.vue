<template>
  <Home/>
  <!-- <Login/> -->
  <v-app>
    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>

import Home from './components/home_Com.vue'
/* import Login from './components/login_Com.vue' */
export default {
  name: 'App',

  components: {
    Home,
    /* Login */
  },

  data: () => ({
    //
  }),
}
</script>
