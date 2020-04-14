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
import axios from '@/plugins/axios'

export default {
  data(){
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  methods: {
    async login(){
      const authInfo = {
        email:this.email,
        password: this.password
      }

      const { headers, data } = await axios.post("/auth/sign_in", authInfo)
      .catch(err => {
        this.error = "※メールアドレスとパスワードをご確認ください"
        return err
      })

      const authHeader = {
        'access-token': headers['access-token'],
        'client':       headers['client'],
        'uid':          headers['uid']
      }

      this.setUserToStoreAndCookie(data['data'])
      this.setAuthHeaderToStoreAndCookie(authHeader)
      this.$router.push("/")
    },

    setUserToStoreAndCookie(data){
      this.$store.commit('user/setUser', data)
      this.$cookies.set('userInfo', data, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    },

    setAuthHeaderToStoreAndCookie(authHeader){
      this.$store.commit('user/setAuth', authHeader)
      this.$cookies.set('authToken', authHeader, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
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
