<template>
  <div class="new-product">
    <form class="new-product-form">
      <h1 class="new-product-title">商品追加</h1>
      <div v-if="image_urls.length>0" class="new-product-preview">
        <div v-for="image_url in image_urls" class="new-product-upload">
          <img :src="image_url" class="new-product-preview-image">
        </div>
      </div>
      <label v-if="images.length < 4">
        <div class="new-product-images">
          <font-awesome-icon icon = "camera-retro" class="new-product-camera" />
          <input @change="handleChangeFile" type="file" class="new-product-file" placeholder="価格" multiple="multiple">
        </div>
      </label>
      <input v-model="name" type="text" class="new-product-name" placeholder="商品名">
      <input v-model="brand" type="text" class="new-product-email" placeholder="ブランド">
      <input v-model="price" type="text" class="new-product-password" placeholder="価格">
      <p class="new-product-error-message">{{ error }}</p>
      <button @click.prevent="add" class="new-product-button">登録</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: "",
      brand: "",
      price: null,
      images: [],
      image_urls: [],
      error: "",
    }
  },
  methods: {
    handleChangeFile(event){
      let images     = this.images
      let image_urls = this.image_urls

      images.push(event.target.files[0])
      image_urls.push(URL.createObjectURL(event.target.files[0]))
      this.images = images
      this.image_urls = image_urls
    },

    add(){
      let formData = new FormData;
      formData.append('product[name]', this.name)
      formData.append('product[brand]', this.brand)
      formData.append('product[price]', this.price)
      formData.append('product[user_id]', this.$store.state.user.currentUser.id)
      for(let i=0; i<this.images.length; i++){
        formData.append(`product[images_attributes][${i}][name]`, this.images[i])
      }
      this.$store.dispatch("product/addProduct", formData)
      this.$router.push("/");
    }
  }
}
</script>

<style>
@media screen and (min-width: 481px){
  .new-product-form {
    background-color: white;
    width: 665px;
    margin: 0 auto;
    padding: 20px 0 80px 0;
    text-align: center;
  }

  .new-product-title {
    color: #00acc1;
    margin-bottom: 20px;
    font-size: 30px;
  }

  .new-product-name {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 380px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .new-product-email {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 380px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .new-product-password {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 380px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .new-product-password-conf {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 380px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .new-product-button {
    height: 40px;
    width: 380px;
    font-size: 25px;
    border-style: none;
    background-color: #00acc1;
    color: white;
  }

  .new-product-error-message {
    color: red;
    margin-bottom: 10px;
  }

  .new-product-images {
    background-color: #f4f8fa;
    border: dashed 3px #616161;
    height: 60px;
    width: 380px;
    font-size: 18px;
    margin: 0 auto 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .new-product-camera {
    font-size: 40px;
    color: #616161;
    line-height: 60px;
  }

  .new-product-file {
    display: none;
  }

  .new-product-preview {
    width: 380px;
    height: 150px;
    margin: 0 auto 20px auto;
    display: flex;
  }

  .new-product-preview-image {
    max-width: 100%;
    max-height: 100%;
  }
}

@media screen and (max-width: 480px){
  .new-product-form {
    background-color: white;
    width: 90%;
    margin: 0 auto;
    padding: 20px 0 80px 0;
    text-align: center;
  }

  .new-product-title {
    color: #00acc1;
    margin-bottom: 20px;
    font-size: 30px;
  }

  .new-product-name {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .new-product-email {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .new-product-password {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .new-product-password-conf {
    background-color: #f4f8fa;
    border-style: none;
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .new-product-button {
    height: 40px;
    width: 90%;
    font-size: 25px;
    border-style: none;
    background-color: #00acc1;
    color: white;
  }

  .new-product-error-message {
    color: red;
    margin-bottom: 10px;
  }

  .new-product-images {
    background-color: #f4f8fa;
    border: dashed 3px #616161;
    height: 60px;
    width: 90%;
    font-size: 18px;
    margin: 0 auto 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .new-product-camera {
    font-size: 40px;
    color: #616161;
    line-height: 60px;
  }

  .new-product-file {
    display: none;
  }

  .new-product-preview {
    width: 90%;
    margin: 0 auto 20px auto;
  }

  .new-product-upload {
    height: 100%;
    width: 100%;
  }

  .new-product-preview-image {
    max-width: 100%;
    max-height: 200px;
  }
}
</style>