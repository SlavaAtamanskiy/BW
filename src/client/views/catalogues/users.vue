<template>
  <div class="users-container">
      <list v-bind:list="users">
        <h3 slot="title">Users</h3>
        <ul slot="contents">
           <li v-for="user in users">{{ user }}</li>
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
  name: "users",
  components: { list },
  data() {
    return {
      // eslint-disable-next-line
      users: ['Admin', 'Bobby', 'Alice', 'Alisha', 'Sam']
    };
  },
  methods: {
    pushHome() {
      this.$router.push("/catalogues");
    }
  }
};
</script>
