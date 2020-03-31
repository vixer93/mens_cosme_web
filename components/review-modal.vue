<template>
  <div class="review-modal">
    <div class="review-modal-bg"></div>
    <div class="review-modal-form">
      <h1 class="review-modal-product-name">商品名が入ります</h1>
      <input type="text" class="review-modal-title" placeholder="レビュータイトルを入力してください">
      <textarea class="review-modal-text" placeholder="レビューを記述してください"></textarea>
      <div class="review-modal-btns">
        <button class="review-modal-submit">投稿</button>
        <button @click="handleClickCancel" class="review-modal-cancel">キャンセル</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickCancel(){
      this.$emit("removeModal", false)
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
    margin: 0 auto;
    display: block;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .review-modal-text {
    border-style: none;
    width: 90%;
    height: 280px;
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
}
</style>