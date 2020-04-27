<template>
  <div class="product-review-card">
    <div class="product">
      <div class="product-review-card-image-favo">
        <img :src="image" class="product-review-card-image">
        <div v-if="currentUser">
          <font-awesome-icon @click="handleClickFavo" icon = "heart" class="product-review-card-favo" :class="{ 'favo-pink': isFavorite }"/>
        </div>
      </div>
      <div class="product-review-card-info">
        <ul class="product-review-card-lists">
          <li class="product-review-card-list">
            <h3 class="product-review-card-list-name">商品名</h3>
            <p class="product-review-card-list-content">{{ name }}</p>
          </li>
          <li class="product-review-card-list">
            <h3 class="product-review-card-list-name">レビュー</h3>
            <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': starOne }"/>
            <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': starTwo }"/>
            <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': starThree }"/>
            <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': starFour }"/>
            <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': starFive }"/>
            <p class="product-review-card-point">{{ point }}</p>
          </li>
          <li class="product-review-card-list">
            <h3 class="product-review-card-list-name">カテゴリー</h3>
            <p class="product-review-card-list-content">{{ category }}</p>
          </li>
          <li class="product-review-card-list">
            <h3 class="product-review-card-list-name">価格</h3>
            <p class="product-review-card-list-content">{{ price }}円</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="review">
      <p class="reviewer-name">{{ reviewer }}さんのレビュー</p>
      <div class="user-review-stars">
        <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': userStarOne }" />
        <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': userStarTwo }" />
        <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': userStarThree }" />
        <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': userStarFour }" />
        <font-awesome-icon icon = "star" class="product-review-card-star" :class="{ 'star-yellow': userStarFive }" />
      </div>
      <h1 class="review-title">{{ reviewTitle }}</h1>
      <p class="review-content">
        {{ reviewContent }}
      </p>
  </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  props: {
    'id': {
      type: Number,
      default: null,
    },
    'image': {
      type: String,
      default: "",
    },
    'name': {
      type: String,
      default: "",
    },
    'price': {
      type: Number,
      default: null,
    },
    'point': {
      type: Number,
      default: null,
    },
    'category': {
      type: String,
      default: "",
    },
    'favorite': {
      type: Boolean,
      default: false,
    },
    'reviewer': {
      type: String,
      default: "",
    },
    'reviewTitle': {
      type: String,
      default: "",
    },
    'reviewContent': {
      type: String,
      default: "",
    },
    'reviewPoint': {
      type: Number,
      default: null,
    }
  },
  created(){
    this.markStarByPoint()
    this.markUserStarByPoint()
  },
  computed: {
    currentUser(){
      return this.$store.state.user.currentUser
    }
  },
  data(){
    return {
      starOne: false,
      starTwo: false,
      starThree: false,
      starFour: false,
      starFive: false,
      isFavorite: this.favorite,
      userStarOne: false,
      userStarTwo: false,
      userStarThree: false,
      userStarFour: false,
      userStarFive: false,
    }
  },
  methods: {
    markStarByPoint(){
      if (0 < this.point && this.point <= 1) {
        this.starOne = true
      }else if (1 < this.point && this.point <= 2) {
        this.starOne = this.starTwo = true
      }else if (2 < this.point && this.point <= 3) {
        this.starOne = this.starTwo = this.starThree = true
      }else if (3 < this.point && this.point <= 4) {
        this.starOne = this.starTwo = this.starThree = this.starFour = true
      }else if (4 < this.point && this.point <= 5) {
        this.starOne = this.starTwo = this.starThree = this.starFour = this.starFive = true
      }
    },

    markUserStarByPoint(){
      if (0 < this.reviewPoint && this.reviewPoint <= 1) {
        this.userStarOne = true
      }else if (1 < this.reviewPoint && this.reviewPoint <= 2) {
        this.userStarOne = this.userStarTwo = true
      }else if (2 < this.reviewPoint && this.reviewPoint <= 3) {
        this.userStarOne = this.userStarTwo = this.userStarThree = true
      }else if (3 < this.reviewPoint && this.reviewPoint <= 4) {
        this.userStarOne = this.userStarTwo = this.userStarThree = this.userStarFour = true
      }else if (4 < this.reviewPoint && this.reviewPoint <= 5) {
        this.userStarOne = this.userStarTwo = this.userStarThree = this.userStarFour = this.userStarFive = true
      }
    },

    handleClickFavo(){
      if (this.isFavorite) {
        this.deleteFavo()
      }else{
        this.addFavo()
      }
    },

    async addFavo(){
      const { data } = await axios.post(`/products/${this.id}/favorites`,
                                        {},
                                        { headers: this.$store.state.user.auth }
                                       )
      this.isFavorite = data.favorite
    },

    async deleteFavo(){
      const { data } = await axios.delete(`/products/${this.id}/favorites`,
                                        { headers: this.$store.state.user.auth }
                                       )
      this.isFavorite = data.favorite
    }
  }
}
</script>

<style scoped="scoped">
.link-to-show {
  text-decoration: none;
  color: black;
}

@media screen and (min-width: 481px){
  .product-review-card {
    margin: 0 auto 30px auto;
    padding: 20px;
    background-color: white;
    width: 750px;
  }

  .product {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .product-review-card-image {
    width: 200px;
    height: 200px;
    object-fit: contain;
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-review-card-info {
    width: 500px;
    height: 200px;
  }
  .product-review-card-lists {
    font-size: 20px;
  }
  .product-review-card-list {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
  }
  .product-review-card-list-name {
    margin-right: 10px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #00acc1;
    color: white;
  }
  .product-review-card-list-content {
    height: 30px;
    line-height: 30px;
  }
  .product-review-card-star {
    color: #eeeeee;
    margin-right: 5px;
  }
  .star-yellow {
    color: #ffc400;
  }
  .product-review-card-image-favo {
    position: relative;
  }
  .product-review-card-favo {
    font-size: 25px;
    position: absolute;
    top: 10px;
    right: 5px;
    color: #bdbdbd;
    cursor: pointer;
  }
  .favo-pink {
    color: #f06292;
  }

  .review {
    width: 100%;
    padding: 20px;
  }

  .reviewer-name {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .review-title {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .user-review-stars {
    margin-bottom: 15px;
  }

  .review-card-content {
    white-space: pre-line;
  }
}
@media screen and (max-width: 480px){
  .product-review-card {
    width: 80%;
    background-color: white;
    margin: 0 auto 30px auto;
    padding: 20px;
    box-sizing: border-box;
  }
  .product-review-card-image {
    width: 90%;
    height: 300px;
    object-fit: contain;
    margin: 0 auto 20px auto;
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-review-card-info {
    width: 90%;
    margin: 0 auto;
  }
  .product-review-card-lists {
    font-size: 15px;
  }
  .product-review-card-list {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
  }
  .product-review-card-list-name {
    margin-right: 10px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #00acc1;
    color: white;
  }
  .product-review-card-list-content {
    height: 30px;
    line-height: 30px;
  }
  .product-review-card-star {
    color: #eeeeee;
    margin-right: 5px;
  }
  .star-yellow {
    color: #ffc400;
  }
    .product-review-card-image-favo {
    position: relative;
  }
  .product-review-card-favo {
    font-size: 25px;
    position: absolute;
    top: 15px;
    right: 25px;
    color: #bdbdbd;
    cursor: pointer;
  }
  .favo-pink {
    color: #f06292;
  }

  .review {
    width: 100%;
    padding: 20px;
  }

  .reviewer-name {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .review-title {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .user-review-stars {
    margin-bottom: 15px;
  }

  .review-card-content {
    white-space: pre-line;
  }
}
</style>