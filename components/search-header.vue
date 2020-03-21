<template>
  <div class="search-header">
    <input v-model="keyword" class="search-header-input" placeholder="キーワード">
    <button class="search-header-btn"><font-awesome-icon icon = "search" /></button>
    <nuxt-link to="/products/new">
      <button class="search-header-create-product-btn display-none-phone">
        <font-awesome-icon icon = "pen" class="product-card-pen" />
        投稿
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      keyword: "",
    }
  }
}
</script>

<style>
@media screen and (min-width: 481px){
  .search-header {
    height: 50px;
    width: 100%;
    padding: 10px;
    text-align: right;
    border-bottom: solid 1px #eeeeee;
  }
  .search-header-input {
    border-style: none;
    background-color: #f4f8fa;
    height: 100%;
    width: 200px;
    font-size: 15px;
    vertical-align: baseline;
  }
  .search-header-btn {
    background-color: #00acc1;
    border-style: none;
    color: white;
    height: 100%;
    width: 50px;
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  .search-header-create-product-btn {
    background-color: #00acc1;
    border-style: none;
    color: white;
    height: 100%;
    width: 70px;
    font-size: 15px;
    vertical-align: top;
    cursor: pointer;
  }
  .product-card-pen {
    margin-right: 5px;
  }
}

@media screen and (max-width: 480px){
  .search-header {
    height: 50px;
    padding: 10px;
    border-bottom: solid 1px #eeeeee;
    display: flex;
    justify-content: center;
  }
  .search-header-input {
    border-style: none;
    background-color: #f4f8fa;
    width: 80%;
    font-size: 15px;
  }
  .search-header-btn {
    background-color: #00acc1;
    border-style: none;
    color: white;
    width: 50px;
    font-size: 20px;
    text-align: center;
  }
  .display-none-phone {
    display: none;
  }
}
</style>