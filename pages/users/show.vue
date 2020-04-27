<template>
  <div class="mypage">
    <UserBackground/>
    <UserProfile/>
    <UserPostedData/>
  </div>
</template>

<script>
import UserBackground    from '@/components/user-background'
import UserProfile       from '@/components/user-profile'
import UserPostedData    from '@/components/user-posted-data'

export default {
  fetch({ store }){
    store.dispatch('user/getUserProfile')
  },
  components: {
    UserBackground,
    UserProfile,
    UserPostedData,
  },
  computed: {
    currentUser(){
      return this.$store.state.user.currentUser
    }
  },
  methods: {
  }
}
</script>