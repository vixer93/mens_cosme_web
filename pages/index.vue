<template>
  <div class="container">
    <ProductCard/>
    <ProductCard/>
  </div>
</template>

<script>
import ProductCard from '@/components/product-card'

export default {
  mounted(){
    this.$store.dispatch("product/getProducts")
  },
  components: {
    ProductCard,
  },
  computed: {
    currentUser(){
      return this.$store.state.user.currentUser
    }
  }
}
</script>

<style>

</style>
