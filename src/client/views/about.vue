<template>
  <v-layout column align-center justify-center fill-height>
        <v-card dark color="blue lighten-2">
          <v-card-title>
            <div>
              <h3 class="headline mb-0">Contacts:</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
          <v-card-text>
              <About/>
          </v-card-text>
        </v-card>
    </v-layout>
</template>

<script>
// @ is an alias to /src
import About from "@/client/components/About.vue";

export default {
  name: "about",
  components: {
    About
  }
};
</script>

<style scoped>

.card-small {
  width:30%;
}
</style>
