<template>
      <v-card :dark="dark" :color="color" class="pt-4">
        <v-card-title class="justify-center">
          <h1>{{ title }}</h1>
        </v-card-title>
        <div class="container-grid">
          <div class="wrapper">
             <div v-for="(path, n) in images" :key="n" class="image-container">
                <img :src="path">
             </div>
          </div>
        </div>
       <v-card-text>
         <span v-html="contens"></span>
       </v-card-text>
     </v-card>
</template>

<style scoped>

.container-grid {
   display: block;
   background-color: #FFFF;
   border-radius: .2rem;
   text-align: center;
   margin: 1rem;
   padding: 1rem;
}

.wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.image-container {
  flex: 1 1;
}

img {
  height:300px;
  width: 300px;
}

</style>

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
