<template>
      <v-card :dark="dark" :color="color" class="pt-4">
        <v-card-title class="justify-center">
          <h1>{{ title }}</h1>
        </v-card-title>
        <v-container grid-list-sm fluid>
          <v-layout row wrap class="grey lighten-5">
              <v-flex v-for="(path, n) in images" :key="n" xs4>
                <v-card flat tile>
                  <v-img :src="path" height="300px" width="310px"></v-img>
                </v-card>
              </v-flex>
         </v-layout>
       </v-container>
       <v-card-text>
         <span v-html="contens"></span>
       </v-card-text>
      </v-card>
</template>

<script>

export default {
  name: "ImgRubric",
  props: {
    title: String,
    contens: String,
    color: String,
    dark: Boolean,
    images: Array
  }
};
</script>
