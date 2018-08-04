<template>
  <div class="home">
    <img src="../assets/logo.jpg">
    <Home msg="Quick menu"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home
  }
};

</script>
