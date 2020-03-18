<template>
  <div class="mypage">
    <div v-if="currentUser">
      こんにちは
      {{ currentUser.name }}さん
    </div>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase';

export default {
  fetch({ store, redirect }){
    store.watch(
      state => state.user.currentUser,
      (newUser, oldUser) => {
        if (!newUser) {
          return redirect("/users/login")
        }
      }
    )
  },
  computed: {
    currentUser(){
      return this.$store.state.user.currentUser
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut()
      .then(res=>{
        this.$store.commit('user/setUser',null)
        this.$router.push("/users/login")
      })
    }
  }
}
</script>