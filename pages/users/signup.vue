<template>
  <div class="signup">
    <SignupForm :ages="ages"/>
  </div>
</template>

<script>
import SignupForm from '@/components/signup-form'
import axios      from "@/plugins/axios"

export default {
  async asyncData({params}){
    const { data } = await axios.get("/user_ages")
    return { ages: data }
  },

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
  margin-top: 20px;
}
</style>