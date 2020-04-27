<template>
  <div class="user-background">
    <div class="background-image">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped="scoped">
@media screen and (min-width: 481px) {
  .user-background {
    position: relative;
    width: 100%;
    height: 0px;
    max-height: 700px;
    padding-top: 35%;
    overflow: hidden;
  }

  .background-image {
    background-image: url('../assets/images/default-back.jpg');
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background-color: white;
  }
}

@media screen and (max-width: 480px) {
  .user-background {
    position: relative;
    width: 100%;
    height: 0px;
    max-height: 700px;
    padding-top: 35%;
    overflow: hidden;
  }

  .background-image {
    background-image: url('https://s3-ap-northeast-1.amazonaws.com/tetra-review/uploads/image/name/6/docker-logo.png');
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background-color: white;
  }
}
</style>