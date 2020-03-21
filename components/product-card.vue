<template>
  <div class="product-card">
    <div class="product-card-image">No Image</div>
    <div class="product-card-info">
      <ul class="product-card-lists">
        <li class="product-card-list">
          <h3 class="product-card-list-name">商品名</h3>
          <p class="product-card-list-content">ニベアメン リップ 無香料</p>
        </li>
        <li class="product-card-list">
          <h3 class="product-card-list-name">レビュー</h3>
          <font-awesome-icon icon = "star" class="product-card-star star-yellow" />
          <font-awesome-icon icon = "star" class="product-card-star star-yellow" />
          <font-awesome-icon icon = "star" class="product-card-star star-yellow" />
          <font-awesome-icon icon = "star" class="product-card-star" />
          <font-awesome-icon icon = "star" class="product-card-star" />
          <p class="product-card-point">3.0</p>
        </li>
        <li class="product-card-list">
          <h3 class="product-card-list-name">カテゴリー</h3>
          <p class="product-card-list-content">リップクリーム</p>
        </li>
        <li class="product-card-list">
          <h3 class="product-card-list-name">価格</h3>
          <p class="product-card-list-content">500円</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
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
    width: 300px;
    height: 300px;
    margin: 0 auto 20px auto;
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-card-info {
    width: 300px;
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
}
</style>