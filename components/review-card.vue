<template>
  <div class="review-card">
    <p class="review-card-reviewer-name">{{ reviewer }}さんのレビュー</p>
    <div class="review-card-stars">
      <font-awesome-icon icon = "star" class="review-card-star" :class="{ 'star-yellow': starOne }" />
      <font-awesome-icon icon = "star" class="review-card-star" :class="{ 'star-yellow': starTwo }" />
      <font-awesome-icon icon = "star" class="review-card-star" :class="{ 'star-yellow': starThree }" />
      <font-awesome-icon icon = "star" class="review-card-star" :class="{ 'star-yellow': starFour }" />
      <font-awesome-icon icon = "star" class="review-card-star" :class="{ 'star-yellow': starFive }" />
    </div>
    <h1 class="review-card-title">{{ title }}</h1>
    <p class="review-card-content">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  created(){
    this.markStarByPoint()
  },
  props: {
    'title': {
      type: String,
      require: true,
    },
    'content': {
      type: String,
      require: true,
    },
    'point': {
      type: Number,
      require: true,
    },
    'reviewer': {
      type: String,
      require: true,
    },
  },
  data(){
    return {
      starOne: false,
      starTwo: false,
      starThree: false,
      starFour: false,
      starFive: false,
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
    }
  }
}
</script>

<style scoped="scoped">
@media screen and (min-width: 481px) {
  .review-card {
    width: 100%;
    padding: 20px;
    border-bottom: solid 2px #eeeeee;
  }
  .review-card-reviewer-name {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .review-card-title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .review-card-stars {
    margin-bottom: 15px;
  }
  .review-card-star {
    font-size: 20px;
    color: #eeeeee;
    margin-right: 5px;
  }
  .star-yellow {
    color: #ffc400;
  }
  .review-card-content {
    white-space: pre-line;
  }
}

@media screen and (max-width: 480px) {
  .review-card {
    width: 100%;
    padding: 20px;
    border-bottom: solid 2px #eeeeee;
  }
  .review-card-reviewer-name {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .review-card-title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .review-card-stars {
    margin-bottom: 10px;
  }
  .review-card-star {
    font-size: 18px;
    color: #eeeeee;
    margin-right: 5px;
  }
  .star-yellow {
    color: #ffc400;
  }
  .review-card-content {
    white-space: pre-line;
  }
}
</style>