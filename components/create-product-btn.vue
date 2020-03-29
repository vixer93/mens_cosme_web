<template>
  <div class="create-product-btn">
    <nuxt-link to="/products/new">
      <font-awesome-icon icon = "plus" class="create-product-btn-icon" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
}
</script>

<style>
@media screen and (max-width: 480px){
  .create-product-btn {
    background-color: #00acc1;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 40px;
  }
  .create-product-btn-icon {
    color: white;
    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 30px;
  }
}
</style>