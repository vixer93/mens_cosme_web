<template>
  <div class="user-posted-data">
    <div class="navigation">
      <ul class="nav-lists">
        <li @click="handleClickNav(0)" :class="{ 'selected': displayPostedProducts }" class="nav-list">投稿商品</li>
        <li @click="handleClickNav(1)" :class="{ 'selected': displayPostedReviews }" class="nav-list">レビュー</li>
        <li @click="handleClickNav(2)" :class="{ 'selected': displayFavoriteProducts }" class="nav-list">お気に入り</li>
      </ul>
    </div>
    <div class="datum">
      <div v-show="displayPostedProducts && userProducts.length>=1" class="user-products">
        <ProductCard v-for="product in userProducts"
          :key="`product-${product.id}`"
          :id="product.id"
          :image="product.image"
          :name="product.name"
          :price="product.price"
          :point="product.point"
          :category="product.category"
          :favorite="product.favorite"
        />
      </div>
      <div v-show="displayPostedReviews && userReviews.length>=1" class="user-reviews">
        <ProductReviewCard v-for="review in userReviews"
          :key="`reviews-${review.id}`"
          :id="review.product.id"
          :image="review.product.image"
          :name="review.product.name"
          :price="review.product.price"
          :point="review.product.point"
          :category="review.product.category"
          :favorite="review.product.favorite"
          :reviewer="review.reviewer"
          :reviewTitle="review.title"
          :reviewContent="review.content"
          :reviewPoint="review.point"
        />
      </div>
      <div v-show="displayFavoriteProducts && userFavorites.length>=1" class="user-favorites">
        <ProductCard v-for="favorite in userFavorites"
          :key="`favorites-${favorite.product.id}`"
          :id="favorite.product.id"
          :image="favorite.product.image"
          :name="favorite.product.name"
          :price="favorite.product.price"
          :point="favorite.product.point"
          :category="favorite.product.category"
          :favorite="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard       from '@/components/product-card'
import ProductReviewCard from '@/components/product-review-card'

export default {
  computed: {
    userProducts(){
      return this.$store.state.user.products
    },
    userReviews(){
      return this.$store.state.user.reviews
    },
    userFavorites(){
      return this.$store.state.user.favorites
    },
  },
  components: {
    ProductCard,
    ProductReviewCard,
  },
  data(){
    return {
      displayPostedProducts: true,
      displayPostedReviews: false,
      displayFavoriteProducts: false,
    }
  },
  methods: {
    handleClickNav(id){
      switch (id){
        case 0:
          this.displayPostedProducts = true
          this.displayPostedReviews = false
          this.displayFavoriteProducts = false
          break
        case 1:
          this.displayPostedProducts = false
          this.displayPostedReviews = true
          this.displayFavoriteProducts = false
          break
        case 2:
          this.displayPostedProducts = false
          this.displayPostedReviews = false
          this.displayFavoriteProducts = true
          break
      }
    },
  }
}
</script>

<style scoped="scoped">
@media screen and (min-width: 481px) {
  .navigation {
    width: 100%;
    height: 70px;
    background-color: white;
    margin-bottom: 20px;
    padding: 0 30px;
    border-bottom: solid 2px #eeeeee;
  }

  .nav-lists {
    display: flex;
  }

  .nav-list {
    list-style: none;
    font-size: 20px;
    line-height: 68px;
    padding: 0 15px;
    cursor: pointer;
  }
  .nav-list:hover {
    border-bottom: solid 2px #00acc1;
    color: #00acc1;
  }

  .selected {
    border-bottom: solid 2px #00acc1;
    color: #00acc1;
  }
}

@media screen and (max-width: 480px) {
  .navigation {
    width: 100%;
    height: 70px;
    background-color: white;
    margin-bottom: 20px;
    padding: 0 20px;
    border-bottom: solid 2px #eeeeee;
  }

  .nav-lists {
    display: flex;
    justify-content: space-evenly;
  }

  .nav-list {
    width: 33%;
    text-align: center;
    list-style: none;
    font-size: 15px;
    line-height: 68px;
    padding: 0 15px;
    cursor: pointer;
  }
  .nav-list:hover {
    border-bottom: solid 2px #00acc1;
    color: #00acc1;
  }

  .selected {
    border-bottom: solid 2px #00acc1;
    color: #00acc1;
  }
}
</style>