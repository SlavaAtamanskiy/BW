<template>
  <v-toolbar app
      style="width:100%;"
      color="blue-grey darken-2"
      dark>

      <v-menu
        :nudge-bottom = "48"
        :nudge-width = "100"
        transition="slide-x-transition"
        bottom
        left>

        <v-toolbar-title slot="activator" class="ma-3">
          <span>Menu</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>

        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item"
            @click="">
            <v-list-tile-title v-text="item"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

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
      <v-btn icon>
        <v-icon>more_vert</v-icon>
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
export default {
  name: "AppHeader",
  data: () => ({
    items: [
      'All', 'Family', 'Friends', 'Coworkers'
    ]
  })
};
</script>
