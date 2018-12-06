<template>
  <v-container grid-list-xl fluid class="bw-content">
    <v-layout v-bind="binding">
      <div v-for="(item, i) in items" :key="i">
           <v-flex v-if="item.type === 'txt'">
               <text-rubric  :title="item.title" :contens="item.contens" :color="item.color" :dark="item.dark"/>
           </v-flex>
           <v-flex v-else>
               <img-rubric :title="item.title" :contens="item.contens" :color="item.color" :dark="item.dark" :images="item.images"/>
           </v-flex>
      </div>
    </v-layout>
  </v-container>
</template>

<script>

// @ is an alias to /src
import TextRubric from "@/client/components/home/text_rubric.vue";
import ImgRubric from "@/client/components/home/img_rubric.vue"; //TODO:image rubric needs some flexibility while resizing
import { initial_data } from "@/client/assets/init/initial_info.js";

export default {
  name: "home",
  components: {
    TextRubric,
    ImgRubric
  },
  data: () => ({
      items: initial_data.pages.home.rubrics
  }),
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
