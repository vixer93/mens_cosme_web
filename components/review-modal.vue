<template>
  <div class="review-modal">
    <div class="review-modal-bg"></div>
    <div class="review-modal-form">
      <h1 class="review-modal-product-name">{{ name }}</h1>
      <div class="review-modal-point">
        <h3 class="review-modal-point-name">評価</h3>
        <font-awesome-icon @click="handleClickStar(1)" icon = "star" class="review-modal-star" :class="{ 'star-yellow': starOne }" />
        <font-awesome-icon @click="handleClickStar(2)" icon = "star" class="review-modal-star" :class="{ 'star-yellow': starTwo }" />
        <font-awesome-icon @click="handleClickStar(3)" icon = "star" class="review-modal-star" :class="{ 'star-yellow': starThree }" />
        <font-awesome-icon @click="handleClickStar(4)" icon = "star" class="review-modal-star" :class="{ 'star-yellow': starFour }" />
        <font-awesome-icon @click="handleClickStar(5)" icon = "star" class="review-modal-star" :class="{ 'star-yellow': starFive }" />
      </div>
      <input v-model="title" type="text" class="review-modal-title" placeholder="レビュータイトルを入力してください">
      <textarea v-model="content" class="review-modal-text" placeholder="レビューを記述してください"></textarea>
      <div class="review-modal-btns">
        <button class="review-modal-submit">投稿</button>
        <button @click="handleClickCancel" class="review-modal-cancel">キャンセル</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'name': {
      type: String,
      require: true,
    }
  },
  data(){
    return {
      starOne: false,
      starTwo: false,
      starThree: false,
      starFour: false,
      starFive: false,
      point: null,
      title: "",
      content: "",
    }
  },
  methods: {
    handleClickCancel(){
      this.$emit("removeModal", false)
    },
    handleClickStar(touchedNum){
      switch(touchedNum){
        case 1:
          this.starOne = true
          this.starTwo = this.starThree = this.starFour = this.starFive = false
          this.point = 1
          break

        case 2:
          this.starOne = this.starTwo = true
          this.starThree = this.starFour = this.starFive = false
          this.point = 2
          break

        case 3:
          this.starOne = this.starTwo = this.starThree = true
          this.starFour = this.starFive = false
          this.point = 3
          break

        case 4:
          this.starOne = this.starTwo = this.starThree = this.starFour = true
          this.starFive = false
          this.point = 4
          break

        case 5:
          this.starOne = this.starTwo = this.starThree = this.starFour = this.starFive = true
          this.point = 5
          break
      }
    }
  }
}
</script>

<style>
@media screen and (min-width: 481px){
  .review-modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  .review-modal-bg {
    background: rgba(45,45,45, 0.6);
    width: 100%;
    height: 100%;
  }
  .review-modal-form {
    background-color: white;
    width: 700px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px;
    border-radius: 5px;
  }
  .review-modal-product-name {
    text-align: center;
    font-size: 25px;
    margin-bottom: 30px;
  }
  .review-modal-title {
    border-style: none;
    width: 90%;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    background-color: #f4f8fa;
    margin: 0 auto 20px auto;
    display: block;
    border-radius: 5px;
  }
  .review-modal-text {
    border-style: none;
    width: 90%;
    height: 250px;
    font-size: 20px;
    background-color: #f4f8fa;
    margin: 0 auto 20px auto;
    display: block;
    border-radius: 5px;
    resize: none;
  }
  .review-modal-btns {
    display: flex;
    justify-content: space-between;
    width: 260px;
    margin: 0 auto;

  }
  .review-modal-submit {
    background-color: #00acc1;
    color: white;
    width: 120px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    border-style: none;
    cursor: pointer;
  }
  .review-modal-cancel {
    background-color: white;
    color: #757575;
    border: solid 1px #757575;
    width: 120px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
  .review-modal-point {
    width: 90%;
    margin: 0 auto 20px auto;
    display: flex;
    color: #757575;
    font-size: 20px;
  }
  .review-modal-point-name {
    margin-right: 10px;
  }
  .review-modal-star {
    cursor: pointer;
    color: #eeeeee;
    margin-right: 5px;
  }
  .star-yellow {
    color: #ffc400;
  }
}
</style>