<template>
  <form class="signup-form">
    <h1 class="signup-title">Sign Up</h1>
    <input v-model="name" type="text" class="signup-name" placeholder="ニックネーム">
    <input v-model="email" type="email" class="signup-email" placeholder="Email">
    <input v-model="password" type="password" class="signup-password" placeholder="パスワード">
    <input v-model="password_confirmation" type="password" class="signup-password-conf" placeholder="パスワード確認"><br>
    <p class="signup-error-message">{{ error }}</p>
    <button @click.prevent="signup" class="signup-button">登録</button>
  </form>
</template>

<script>
import axios    from "@/plugins/axios"

export default {
  data(){
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      error: "",
    }
  },
  methods: {
    async signup(){
      const signUpInfo = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }
      const { headers, data } = await axios.post("/auth",signUpInfo)
      .catch(err => {
        this.error = "入力内容を確認してください"
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
    font-size: 30px;
  }

  .signup-name {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 380px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .signup-email {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 380px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .signup-password {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 380px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .signup-password-conf {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 380px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .signup-button {
    height: 40px;
    width: 380px;
    font-size: 25px;
    border-style: none;
    background-color: #00acc1;
    color: white;
  }

  .signup-error-message {
    color: red;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 480px){
  .signup-form {
    background-color: white;
    width: 90%;
    margin: 0 auto;
    padding: 20px 0 80px 0;
    text-align: center;
  }

  .signup-title {
    color: #00acc1;
    margin-bottom: 20px;
    font-size: 30px;
  }

  .signup-name {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .signup-email {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .signup-password {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .signup-password-conf {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .signup-button {
    height: 40px;
    width: 90%;
    font-size: 25px;
    border-style: none;
    background-color: #00acc1;
    color: white;
  }

  .signup-error-message {
    color: red;
    margin-bottom: 10px;
  }
}
</style>