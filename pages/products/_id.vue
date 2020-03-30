<template>
  <div class="show-product">
    <DetailProduct
      :name="product.name"
      :brand="product.brand"
      :point="product.point"
      :price="product.price"
      :images="product.images"
    />
  </div>
</template>

<script>
import DetailProduct from '@/components/detail-product'
import axios from '@/plugins/axios'

export default {
  async asyncData({ params }){
    let { data } = await axios.get(`/products/${params.id}`)
    return { product: data }
  },
  components: {
    DetailProduct,
  }
}
</script>

<style>
  
</style>