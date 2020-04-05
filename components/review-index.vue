<template>
  <div class="review-index">
    <h1 class="review-index-title">レビュー一覧</h1>
    <div v-if="reviews.length==0" class="review-index-no-review" >レビューはまだありません</div>
    <ReviewCard v-else v-for="review in reviews"
      :key="review.id"
      :title="review.title"
      :content="review.content"
      :point="review.point"
      :reviewer="review.reviewer"
    />
    <div v-if="reviews.length>=2">
      <div v-if="isLoadingReviews" class="review-index-load">
        <font-awesome-icon icon = "spinner" class="review-index-load-icon"/>
      </div>
      <p v-else @click="handleClickMoreReviews" class="review-index-more-display">もっと表示する</p>
    </div>
  </div>
</template>

<script>
import ReviewCard from '@/components/review-card'

export default {
  components: {
    ReviewCard,
  },
  props: {
    'reviews': {
      type: Array,
      default: [],
    }
  },
  data(){
    return {
      isLoadingReviews: false,
    }
  },
  methods: {
    async getReviews(){
      await this.$store.dispatch("review/getAllReviews", this.$route.params.id)
    },

    async handleClickMoreReviews(){
      this.isLoadingReviews = true
      await this.getReviews()
      this.isLoadingReviews = false
    }
  }
}
</script>

<style scoped="scoped">
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}

@media screen and (min-width: 481px) {
  .review-index {
    background-color: white;
    width: 750px;
    margin: 0 auto 20px auto;
    padding: 20px 0;
  }
  .review-index-title {
    text-align: center;
    font-size: 25px;
    padding-bottom: 10px;
    border-bottom: solid 2px #eeeeee;
  }
  .review-index-no-review {
    text-align: center;
    padding-top: 20px;
    font-size: 25px;
  }
  .review-index-more-display {
    text-align: center;
    font-size: 25px;
    width: max-content;
    margin: 0 auto;
    padding-top: 10px;
    cursor: pointer;
  }
  .review-index-load {
    text-align: center;
    padding-top: 10px;
  }
  .review-index-load-icon {
    font-size: 25px;
    color: #757575;
    margin: 0 auto;
    animation: spin 1.2s linear 0s infinite;
    transform-origin: 50% 50% 0;
  }
}
</style>