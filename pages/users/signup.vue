<template>
  <div class="signup">
    <SignupForm/>
  </div>
</template>

<script>
import SignupForm from '@/components/signup-form'
export default {
  components: {
    SignupForm,
  }
}

</script>

<style>
.signup {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>