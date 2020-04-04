<template>
  <div class="create-review-btn">
    <button @click="handleClickBtn" class="create-review-btn-btn">
      レビューを投稿する
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickBtn(){
      this.$emit("displayReviewModal", true)
    }
  }
}
</script>

<style>
@media screen and (min-width: 481px){
  .create-review-btn {
    background-color: white;
    width: 750px;
    height: 70px;
    margin: 0 auto 20px auto;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .create-review-btn-btn {
    background-color: #00acc1;
    width: 80%;
    height: 60%;
    color: white;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    border-style: none;
    border-radius: 20px;
    cursor: pointer;
  }
}

@media screen and (max-width: 480px){
  .create-review-btn {
    background-color: white;
    width: 80%;
    height: 70px;
    margin: 0 auto 20px auto;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .create-review-btn-btn {
    background-color: #00acc1;
    width: 80%;
    height: 60%;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    border-style: none;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>