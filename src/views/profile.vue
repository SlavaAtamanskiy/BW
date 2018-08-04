<template>
    <div>
        <router-view></router-view>
        <button ref="profile-back-button" @click="pushHome" class="btn">Back</button>
    </div>
</template>

<script>
    export default {
        methods: {
            pushHome() {
              this.$router.push('/profile');
            }
        }
    }
</script>
