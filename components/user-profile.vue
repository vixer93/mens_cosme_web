<template>
  <div class="user-profile">
    <div class="content">
      <div class="image-frame">
        <img class="user-image" src="../assets/images/default-top.jpg">
      </div>
      <div class="user-introduction">
        <span class="user-name">gin</span>
        <p class="user-text">こんにちは。初めまして。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped="scoped">
@media screen and (min-width: 481px) {
  .user-profile {
    background-color: white;
    border-bottom: solid 2px #eeeeee;
  }

  .content {
    max-width: 940px;
    margin: 0 auto;
    display: flex;
    background-color: white;
    padding: 40px 0px;
  }
  .image-frame {
    width: 100px;
    height: 100px;
    margin: 0 30px;
    border: solid 1px #eeeeee;
  }
  .user-image {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  .user-name {
    font-size: 25px;
  }
  .user-text {
    margin-top: 10px;
    font-size: 18px;
    max-width: 850px;
  }
}

@media screen and (max-width: 480px) {
  .user-profile {
    width: 100%;
    display: flex;
    background-color: white;
    padding: 20px 10px;
    border-bottom: solid 2px #eeeeee;
  }
  .image-frame {
    width: 100px;
    height: 100px;
    margin: 0 15px;
    border: solid 1px #eeeeee;
  }
  .user-image {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  .user-name {
    font-size: 20px;
  }
  .user-text {
    margin-top: 10px;
    font-size: 15px;
    max-width: 250px;
  }
}
</style>