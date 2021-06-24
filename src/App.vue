<template>
  <v-app class="gray lighten-4">
    <nav-bar />
    <v-main class="mx-4 m-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",

  components: {
    NavBar,
  },

  data() {
    return {};
  },
};
</script>
