<template>
  <div class="login">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/login-form'

export default {
  components: {
    LoginForm,
  }
}

</script>

<style>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
</style>