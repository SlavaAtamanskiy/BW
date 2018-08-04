<template>
  <div class="users">
    <h3>Users</h3>
      <ul>
         <li v-for="user in users">{{ user }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "users",
  data(){
    return {
      users:['Admin', 'Bobby', 'Alisha']
    };
  }
};
</script>
