<template>
  <div class="product-card">
    <div class="product-card-image-favo">
      <img :src="image" class="product-card-image">
      <div v-if="currentUser">
        <font-awesome-icon @click="handleClickFavo" icon = "heart" class="product-card-favo" :class="{ 'favo-pink': isFavorite }"/>
      </div>
    </div>
    <nuxt-link :to="{name: 'products-id', params: {id: id}}" class="link-to-show">
      <div class="product-card-info">
        <ul class="product-card-lists">
          <li class="product-card-list">
            <h3 class="product-card-list-name">商品名</h3>
            <p class="product-card-list-content">{{ name }}</p>
          </li>
          <li class="product-card-list">
            <h3 class="product-card-list-name">レビュー</h3>
            <font-awesome-icon icon = "star" class="product-card-star" :class="{ 'star-yellow': starOne }"/>
            <font-awesome-icon icon = "star" class="product-card-star" :class="{ 'star-yellow': starTwo }"/>
            <font-awesome-icon icon = "star" class="product-card-star" :class="{ 'star-yellow': starThree }"/>
            <font-awesome-icon icon = "star" class="product-card-star" :class="{ 'star-yellow': starFour }"/>
            <font-awesome-icon icon = "star" class="product-card-star" :class="{ 'star-yellow': starFive }"/>
            <p class="product-card-point">{{ point }}</p>
          </li>
          <li class="product-card-list">
            <h3 class="product-card-list-name">カテゴリー</h3>
            <p class="product-card-list-content">{{ category }}</p>
          </li>
          <li class="product-card-list">
            <h3 class="product-card-list-name">価格</h3>
            <p class="product-card-list-content">{{ price }}円</p>
          </li>
        </ul>
      </div>
    </nuxt-link>
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
    }
  },
  created(){
    this.markStarByPoint()
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

<style>
.link-to-show {
  text-decoration: none;
  color: black;
}

@media screen and (min-width: 481px){
  .product-card {
    width: 750px;
    background-color: white;
    margin: 0 auto 30px auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .product-card-image {
    width: 200px;
    height: 200px;
    object-fit: contain;
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-card-info {
    width: 500px;
    height: 200px;
  }
  .product-card-lists {
    font-size: 20px;
  }
  .product-card-list {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
  }
  .product-card-list-name {
    margin-right: 10px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #00acc1;
    color: white;
  }
  .product-card-list-content {
    height: 30px;
    line-height: 30px;
  }
  .product-card-star {
    color: #eeeeee;
    margin-right: 5px;
  }
  .star-yellow {
    color: #ffc400;
  }
  .product-card-image-favo {
    position: relative;
  }
  .product-card-favo {
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
}
@media screen and (max-width: 480px){
  .product-card {
    width: 80%;
    background-color: white;
    margin: 0 auto 30px auto;
    padding: 20px;
    box-sizing: border-box;
  }
  .product-card-image {
    width: 90%;
    height: 300px;
    object-fit: contain;
    margin: 0 auto 20px auto;
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-card-info {
    width: 90%;
    margin: 0 auto;
  }
  .product-card-lists {
    font-size: 15px;
  }
  .product-card-list {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
  }
  .product-card-list-name {
    margin-right: 10px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #00acc1;
    color: white;
  }
  .product-card-list-content {
    height: 30px;
    line-height: 30px;
  }
  .product-card-star {
    color: #eeeeee;
    margin-right: 5px;
  }
  .star-yellow {
    color: #ffc400;
  }
    .product-card-image-favo {
    position: relative;
  }
  .product-card-favo {
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
}
</style>