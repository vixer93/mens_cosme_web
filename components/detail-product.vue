<template>
  <div class="detail-product">
    <div class="detail-product-images">
      <div class="detail-product-image-favo">
        <img class="detail-product-image" :src="mainImage" >
        <div v-if="currentUser">
          <font-awesome-icon @click="handleClickFavo" icon = "heart" class="detail-product-favo" :class="{ 'favo-pink': isFavorite }"/>
        </div>
      </div>
      <div class="detail-product-sub-images">
        <img v-for="(image, index) in images" @click="changeImage(index)" :src="image.url" class="detail-product-sub-image" :key="index">
      </div>
    </div>
    <div class="detail-product-info">
      <ul class="detail-product-lists">
        <li class="detail-product-list">
          <h3 class="detail-product-list-name">レビュー</h3>
          <font-awesome-icon icon = "star" class="detail-product-star" :class="{ 'star-yellow': starOne }" />
          <font-awesome-icon icon = "star" class="detail-product-star" :class="{ 'star-yellow': starTwo }" />
          <font-awesome-icon icon = "star" class="detail-product-star" :class="{ 'star-yellow': starThree }" />
          <font-awesome-icon icon = "star" class="detail-product-star" :class="{ 'star-yellow': starFour }" />
          <font-awesome-icon icon = "star" class="detail-product-star" :class="{ 'star-yellow': starFive }" />
          <p class="detail-product-point">{{ point }}</p>
        </li>
        <li class="detail-product-list">
          <h3 class="detail-product-list-name">商品名</h3>
          <p class="detail-product-list-content">{{ name }}</p>
        </li>
        <li class="detail-product-list">
          <h3 class="detail-product-list-name">ブランド</h3>
          <p class="detail-product-list-content">{{ brand }}</p>
        </li>
        <li class="detail-product-list">
          <h3 class="detail-product-list-name">カテゴリー</h3>
          <p class="detail-product-list-content">{{ category }}</p>
        </li>
        <li class="detail-product-list">
          <h3 class="detail-product-list-name">価格</h3>
          <p class="detail-product-list-content">{{ price }}円</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  props: {
    'name': {
      type: String,
      require: true,
    },
    'brand': {
      type: String,
      require: true,
    },
    'point': {
      type: Number,
      require: true,
    },
    'price': {
      type: Number,
      require: true,
    },
    'images': {
      type: Array,
      require: true,
    },
    'category': {
      type: String,
      require: true,
    },
    'favorite': {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentUser(){
      return this.$store.state.user.currentUser
    }
  },
  data(){
    return {
      mainImage: this.images[0].url,
      starOne: false,
      starTwo: false,
      starThree: false,
      starFour: false,
      starFive: false,
      isFavorite: this.favorite,
    }
  },
  created(){
    this.markStarByPoint()
  },
  methods: {
    changeImage(index){
      this.mainImage = this.images[index].url
    },

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
      const { data } = await axios.post(`/products/${this.$route.params.id}/favorites`,
                                        {},
                                        { headers: this.$store.state.user.auth }
                                       )
      this.isFavorite = data.favorite
    },

    async deleteFavo(){
      const { data } = await axios.delete(`/products/${this.$route.params.id}/favorites`,
                                        { headers: this.$store.state.user.auth }
                                       )
      this.isFavorite = data.favorite
    }
  }
}
</script>

<style>
@media screen and (min-width: 481px) {
  .detail-product {
    width: 750px;
    margin: 0 auto;
    background-color: white;
    padding: 20px;
    display: flex;
  }
  .detail-product-image {
    width: 300px;
    height: 300px;
    object-fit: contain;
    border: solid 1px #eeeeee;
    background-color: #eeeeee;
    margin-bottom: 10px;
  }
  .detail-product-sub-images {
    display: flex;
    width: 300px;
    overflow-x: scroll;
  }
  .detail-product-sub-image {
    height: 100px;
    object-fit: contain;
    border: solid 1px #eeeeee;
    background-color: #eeeeee;
    margin-right: 10px;
    cursor: pointer;
  }
  .detail-product-info {
    width: 500px;
    padding: 0 20px;
  }
  .detail-product-lists {
    font-size: 25px;
  }
  .detail-product-list {
    display: flex;
    list-style: none;
    margin-bottom: 40px;
  }
  .detail-product-list-name {
    margin-right: 10px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #00acc1;
    color: white;
  }
  .detail-product-list-content {
    height: 30px;
    line-height: 30px;
  }
  .detail-product-star {
    color: #eeeeee;
    margin-right: 5px;
  }
  .star-yellow {
    color: #ffc400;
  }
  .detail-product-image-favo {
    position: relative;
  }
  .detail-product-favo {
    font-size: 30px;
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

@media screen and (max-width: 480px) {
  .detail-product {
    width: 80%;
    margin: 0 auto;
    background-color: white;
    padding: 20px;
  }
  .detail-product-image {
    width: 90%;
    height: 250px;
    object-fit: contain;
    border: solid 1px #eeeeee;
    background-color: #eeeeee;
    margin: 0 auto 10px auto;
    display: block;
  }
  .detail-product-sub-images {
    display: flex;
    width: 90%;
    overflow-x: scroll;
    margin: 0 auto 20px auto;
  }
  .detail-product-sub-image {
    height: 100px;
    object-fit: contain;
    border: solid 1px #eeeeee;
    background-color: #eeeeee;
    margin-right: 10px;
    cursor: pointer;
  }
  .detail-product-info {
    width: 100%;
    padding: 0 20px;
  }
  .detail-product-lists {
    font-size: 20px;
  }
  .detail-product-list {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
  }
  .detail-product-list-name {
    margin-right: 10px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #00acc1;
    color: white;
  }
  .detail-product-list-content {
    height: 30px;
    line-height: 30px;
  }
  .detail-product-star {
    color: #eeeeee;
    margin-right: 5px;
  }
  .star-yellow {
    color: #ffc400;
  }
  .detail-product-image-favo {
    position: relative;
    width: 100%;
  }
  .detail-product-favo {
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 25px;
    color: #bdbdbd;
    cursor: pointer;
  }
  .favo-pink {
    color: #f06292;
  }
}
</style>