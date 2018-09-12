<template>
  <div class="words-container">
      <list v-bind:list="words">
        <h3 slot="title">Words</h3>
        <ul slot="contents">
           <li v-for="word in words">{{ word }}</li>
        </ul>
        <div slot="page-buttons">
           <button ref="catalogues-back-button" @click="pushHome" class="btn">Back</button>
        </div>
      </list>
   </div>
</template>

<script>
// @ is an alias to /src
import list from "@/client/components/catalogues/list.vue";
export default {
  name: "words",
  components: { list },
  data() {
    return {
      words: ["piano", "boy", "land", "toy"]
    };
  },
  methods: {
    pushHome() {
      this.$router.push("/catalogues");
    }
  }
};
</script>
