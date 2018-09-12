<template>
  <v-container grid-list-xl fluid class="bw-content">
    <v-layout v-bind="binding">
      <v-flex>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import About from "@/client/components/About.vue";

export default {
  name: "about",
  components: {
    About
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
  background-color: #ECEFF1;
  padding-left: 40%;
  padding-right: 40%;
}
</style>
