<template>
  <div class="container">
    <ProductCard v-for="product in products"
      :key="product.id"
      :image="product.image"
      :name="product.name"
      :price="product.price"
      :point="product.point"
    />
  </div>
</template>

<script>
import ProductCard from '@/components/product-card'
import axios       from '@/plugins/axios'

export default {
  async fetch({ store }){
    await store.dispatch("product/getProducts")
  },
  components: {
    ProductCard,
  },
  computed: {
    currentUser(){
      return this.$store.state.user.currentUser
    },
    products(){
      return this.$store.state.product.products
    }
  }
}
</script>

<style>

</style>
