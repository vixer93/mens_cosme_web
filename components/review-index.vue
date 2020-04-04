<template>
  <div class="review-index">
    <h1 class="review-index-title">レビュー一覧</h1>
    <div v-if="reviews.length==0" class="review-index-no-review" >レビューはまだありません</div>
    <ReviewCard v-else v-for="review in reviews"
      :title="review.title"
      :content="review.content"
      :point="review.point"
      :reviewer="review.reviewer"
    />
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
  }
}
</script>

<style scoped="scoped">
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
}
</style>