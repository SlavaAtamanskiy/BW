<template>
  <v-toolbar app
      style="width:100%;"
      color="blue-grey darken-2"
      dark>

      <v-btn icon v-on:click="toggleDrawer">
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn flat><router-link to="/">Home</router-link></v-btn>
         <v-btn flat><router-link to="/catalogues">Catalogues</router-link></v-btn>
         <v-btn flat><router-link to="/about">About</router-link></v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

  </v-toolbar>
</template>

<style scoped>

.v-toolbar {
   opacity: .5;
}

.v-btn__content a {
  text-decoration: none;
  font-weight: bold;
  color: #ffff;
}

.v-btn__content a.router-link-exact-active {
  color: #ffff;
}

.v-btn__content a:hover {
  color: #ffff;
}

</style>

<script>

import { bus } from "@/main.js";

export default {
  name: "AppHeader",
  methods: {
    toggleDrawer () {
      bus.$emit("toggleDrawerEvent");
    }
  }
};

</script>
