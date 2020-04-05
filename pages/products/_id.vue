<template>
  <div class="show-product" :style="displayModal ? styleObject : false">
    <DetailProduct
      :name="product.name"
      :brand="product.brand"
      :point="product.point"
      :price="product.price"
      :images="product.images"
    />
    <CreateReviewBtn v-if="currentUser" @displayReviewModal="displayReviewModal"/>
    <ReviewIndex
      :reviews="reviews"
    />
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
import ReviewIndex     from '@/components/review-index'

export default {
  async fetch({ store, params }){
    await store.dispatch("review/getProduct", params.id)
  },
  components: {
    DetailProduct,
    CreateReviewBtn,
    ReviewModal,
    ReviewIndex,
  },
  computed: {
    currentUser(){
      return this.$store.state.user.currentUser
    },
    product(){
      return this.$store.state.review.product
    },
    reviews(){
      return this.$store.state.review.reviews
    }
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
