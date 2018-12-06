<template>
      <v-card :dark="dark" :color="color">
        <v-card-title>
          <h1>{{ title }}</h1>
        </v-card-title>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
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
