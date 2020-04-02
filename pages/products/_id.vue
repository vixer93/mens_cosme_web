<template>
  <div class="show-product" :style="displayModal ? styleObject : false">
    <DetailProduct
      :name="product.name"
      :brand="product.brand"
      :point="product.point"
      :price="product.price"
      :images="product.images"
    />
    <CreateReviewBtn @displayReviewModal="displayReviewModal"/>
    <ReviewModal
      @removeModal="undisplayReviewModal"
      v-if="displayModal"
      :name="product.name"
    />
  </div>
</template>

<script>
import DetailProduct   from '@/components/detail-product'
import CreateReviewBtn from '@/components/create-review-btn'
import ReviewModal     from '@/components/review-modal'
import axios           from '@/plugins/axios'

export default {
  async asyncData({ params }){
    let { data } = await axios.get(`/products/${params.id}`)
    return { product: data }
  },
  components: {
    DetailProduct,
    CreateReviewBtn,
    ReviewModal,
  },
  data(){
    return {
      displayModal: false,
      styleObject: {
        position: 'fixed',
        width: '100%',
      }
    }
  },
  methods: {
    displayReviewModal(display){
      this.displayModal = display
    },
    undisplayReviewModal(undisplay){
      this.displayModal = undisplay
    },
  }
}
</script>
