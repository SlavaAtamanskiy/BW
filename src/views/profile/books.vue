<template>
  <div class="books-container">
      <Books/>
  </div>
</template>

<script>
// @ is an alias to /src
import Books from "@/components/profile/books.vue";
export default {
  name: "books",
  components: { Books }
};

</script>
