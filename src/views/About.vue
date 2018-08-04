<template>
  <div class="about">
    <h3>Contacts:</h3>
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";

export default {
  name: "about",
  components: {
    About
  }
};

</script>
