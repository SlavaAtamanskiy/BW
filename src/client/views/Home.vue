<template>
  <v-container grid-list-xl fluid class="bw-content">
    <v-layout v-bind="binding">
      <v-flex>
        <v-card dark color="blue lighten-2">
          <v-card-title><Home msg="Quick menu"/></v-card-title>
          <img src="../assets/logo.jpg">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="lime">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="light-green">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Home from "@/client/components/Home.vue";

export default {
  name: "home",
  components: {
    Home
  },
  computed: {
     binding () {
       const binding = {}
       binding.column = true;
       return binding
     }
   }
};
</script>

<style scoped>
.bw-content {
  background-color: inherit;
  padding-left: 20%;
  padding-right: 20%;
}
</style>
