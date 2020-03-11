<template>
  <form class="signup-form">
    <h1 class="signup-title">Sign Up</h1>
    <input v-model="name" type="text" class="signup-name" placeholder="ニックネーム">
    <input v-model="email" type="text" class="signup-email" placeholder="Email">
    <input v-model="password" type="text" class="signup-password" placeholder="パスワード">
    <input v-model="password_confirmation" type="text" class="signup-password-conf" placeholder="パスワード確認"><br>
    <button class="signup-button">登録</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    }
  },
  method: {
    
  }
}
</script>

<style>
.signup-form {
  background-color: white;
  width: 665px;
  margin: 0 auto;
  padding: 20px 0 80px 0;
  text-align: center;
}

.signup-title {
  color: #00acc1;
  margin-bottom: 20px;
}

.signup-name {
  background-color: #f4f8fa;
  border-style: none;
  height: 40px;
  width: 380px;
  margin-bottom: 20px;
}

.signup-email {
  background-color: #f4f8fa;
  border-style: none;
  height: 40px;
  width: 380px;
  margin-bottom: 20px;
}

.signup-password {
  background-color: #f4f8fa;
  border-style: none;
  height: 40px;
  width: 380px;
  margin-bottom: 20px;
}

.signup-password-conf {
  background-color: #f4f8fa;
  border-style: none;
  height: 40px;
  width: 380px;
  margin-bottom: 20px;
}

.signup-button {
  height: 40px;
  width: 380px;
  font-size: 25px;
  border-style: none;
  background-color: #00acc1;
  color: white;
}
</style>