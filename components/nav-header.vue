<template>
  <div class="nav-header">
    <h1 class="nav-header-logo">
      <nuxt-link class="nav-header-link" to="/">
        <font-awesome-icon icon = "shapes" />
        tetra
      </nuxt-link>
    </h1>
    <nav>
      <ul v-if="currentUser" class="nav-header-lists">
        <li class="nav-header-list"><nuxt-link class="nav-header-link" to="/users/show">マイページ</nuxt-link></li>
        <li class="nav-header-list"><span @click="logout" class="nav-header-link">ログアウト</span></li>
      </ul>
      <ul v-else class="nav-header-lists">
        <li class="nav-header-list"><nuxt-link class="nav-header-link" to="/users/signup">新規登録</nuxt-link></li>
        <li class="nav-header-list"><nuxt-link class="nav-header-link" to="/users/login">ログイン</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
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

<style>
.nav-header {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.nav-header-logo {
  color: #00acc1;
  font-size: 30px;
}
.nav-header-lists {
  display: flex;
  line-height: 38px;
}
.nav-header-list {
  list-style: none;
  color: #00acc1;
  margin-left: 10px;
}
.nav-header-link {
  text-decoration: none;
  color: #00acc1;
  cursor: pointer;
}
</style>