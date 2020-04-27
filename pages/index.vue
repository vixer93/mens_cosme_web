<template>
  <div class="container">
    <ProductCard v-for="product in products"
      :key="product.id"
      :id="product.id"
      :image="product.image"
      :name="product.name"
      :price="product.price"
      :point="product.point"
      :category="product.category"
      :favorite="product.favorite"
    />
    <CreateProductBtn v-if="currentUser" class="display-none-pc"/>
  </div>
</template>

<script>
import ProductCard      from '@/components/product-card'
import CreateProductBtn from '@/components/create-product-btn'

export default {
  async fetch({ store }){
    await store.dispatch("product/getProducts")
  },
  components: {
    ProductCard,
    CreateProductBtn,
  },
  computed: {
    currentUser(){
      return this.$store.state.user.currentUser
    },
    products(){
      return this.$store.state.product.products
    },
  }
}
</script>

<style>
.container {
  margin-top: 20px;
}

@media screen and (min-width: 481px){
  .display-none-pc {
    display: none;
  }
}

</style>
