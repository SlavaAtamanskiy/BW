<template>
  <div class="about">
    <p>tel: {{ phone }}</p>
    <ul>
      <li><a v-bind:href="github" target="_blank">Github</a></li>
      <li><a v-bind:href="facebook" target="_blank">Facebook</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      phone: "+380967401591",
      github: "https://github.com/SlavaAtamanskiy",
      facebook: "https://www.facebook.com/profile.php?id=100015992616603"
    };
  }
};
</script>
