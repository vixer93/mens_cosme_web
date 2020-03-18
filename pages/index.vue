<template>
  <div class="container">
    Hello<span v-if="currentUser"> {{ currentUser.name }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser(){
      return this.$store.state.user.currentUser
    }
  }
}
</script>

<style>

</style>
