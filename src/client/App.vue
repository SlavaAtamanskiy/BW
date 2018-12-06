<template>
  <v-app>
      <app-drawer app></app-drawer>
      <app-header></app-header>
        <v-content class="bw-container">
            <app-body></app-body>
        </v-content>
      <app-footer></app-footer>
  </v-app>
</template>

<script>

import AppHeader from "@/client/components/Header.vue";
import AppFooter from "@/client/components/Footer.vue";
import AppBody from "@/client/components/Body.vue";
import AppDrawer from "@/client/components/Drawer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppBody,
    AppFooter,
    AppDrawer
  }
};

</script>

<style scoped>

.bw-container {
  background-color: #ECEFF1;
}

</style>
