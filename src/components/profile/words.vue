<template>
  <div class="words">
    <h3>Words</h3>
    <ul>
      <li v-for="word in words">{{ word }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "words",
  data(){
    return {
      words:['book', 'boy', 'toy']
    };
  }
};
</script>
