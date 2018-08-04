<template>
  <div class="books">
    <h3>Books</h3>
      <ul>
         <li v-for="book in books">{{ book }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "books",
  data(){
    return {
      books:['Piano', 'Bobby-boy', 'Alice in Wonderland']
    };
  }
};
</script>
