<template>
  <v-card :dark="dark" :color="color" class="pa-4">
    <v-card-title class="justify-center">
      <h1>{{ title }}</h1>
    </v-card-title>
    <v-card-text>
      <span v-html="contens"></span>
    </v-card-text>
  </v-card>
</template>

<style>

@media (max-width: 1000px) {
  .v-card__text img {
    display:none;
  }
}

</style>

<script>

export default {
  name: "TextRubric",
  props: {
    title: String,
    contens: String,
    color: String,
    dark: Boolean
  }
};
</script>
