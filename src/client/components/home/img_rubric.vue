<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card :dark="dark" :color="color">
        <v-card-title>
          <h1>{{ title }}</h1>
        </v-card-title>
        <v-container v-bind="{ [`grid-list-sm`]: true }" fluid>
          <v-layout row wrap>
              <v-flex v-for="(path, n) in images" :key="n" xs4>
                <v-card flat tile>
                  <v-img :lazy-src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" height="150px"></v-img>
                </v-card>
              </v-flex>
         </v-layout>
       </v-container>
       <v-card-text>
         <span v-html="contens"></span>
       </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
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
