<template>
  <v-toolbar app
      style="width:100%;"
      class="secondary"
      dark>

      <v-btn icon v-on:click="toggleDrawer">
        <v-icon>{{icon}}</v-icon>
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
  data: () => ({
    drawer: false,
    icon:'menu'
  }),
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer;
      this.icon = (this.drawer) ? 'arrow_back' : 'menu';
      bus.$emit("toggleDrawerEvent");
    }
  }
};

</script>
