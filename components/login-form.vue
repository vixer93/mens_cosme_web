<template>
  <form class="login-form">
    <h1 class="login-title">Log In</h1>
    <input v-model="email" type="email" class="login-email" placeholder="Email">
    <input v-model="password" type="password" class="login-password" placeholder="パスワード">
    <p class="login-error-message">{{ error }}</p>
    <button @click.prevent="login" class="login-button">ログイン</button>
  </form>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data(){
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  methods: {
    login(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(()=>{
        this.$router.push("/")
      })
      .catch(error => {
        this.error = (code => {
          switch (code) {
            case "auth/user-not-found":
              return "メールアドレスが間違っています";
            case "auth/wrong-password":
              return "※パスワードが正しくありません";
            default:
              return "※メールアドレスとパスワードをご確認ください";
          }
        })(error.code);
      })
    }
  }
}
</script>

<style>
@media screen and (min-width: 481px){
  .login-form {
  background-color: white;
  width: 665px;
  margin: 0 auto;
  padding: 20px 0 80px 0;
  text-align: center;
  }

  .login-title {
  color: #00acc1;
  margin-bottom: 20px;
  font-size: 30px;
  }

  .login-email {
  background-color: #f4f8fa;
  border-style: none;
  height: 40px;
  width: 380px;
  margin-bottom: 20px;
  font-size: 18px;
  }

  .login-password {
  background-color: #f4f8fa;
  border-style: none;
  height: 40px;
  width: 380px;
  margin-bottom: 20px;
  font-size: 18px;
  }

  .login-button {
  height: 40px;
  width: 380px;
  font-size: 25px;
  border-style: none;
  background-color: #00acc1;
  color: white;
  }

  .login-error-message {
  color: red;
  margin-bottom: 10px;
  }
}

@media screen and (max-width: 480px){
  .login-form {
  background-color: white;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0 80px 0;
  text-align: center;
  }

  .login-title {
  color: #00acc1;
  margin-bottom: 20px;
  font-size: 30px;
  }

  .login-email {
  background-color: #f4f8fa;
  border-style: none;
  height: 40px;
  width: 90%;
  margin-bottom: 20px;
  font-size: 18px;
  }

  .login-password {
  background-color: #f4f8fa;
  border-style: none;
  height: 40px;
  width: 90%;
  margin-bottom: 20px;
  font-size: 18px;
  }

  .login-button {
  height: 40px;
  width: 90%;
  font-size: 25px;
  border-style: none;
  background-color: #00acc1;
  color: white;
  }

  .login-error-message {
  color: red;
  margin-bottom: 10px;
  font-size: 12px;
  }
}
</style>
