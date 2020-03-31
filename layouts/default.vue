<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  components: {
    Header,
  }
}

</script>

<style>
@import '@/assets/style/reset.css'
@font-face {
  font-family: "YuGothic-M";
  font-weight: normal;
   src: local("YuGothic-Medium"),
      local("Yu Gothic Medium"),
      local("YuGothic-Regular");
}

@font-face {
  font-family: "YuGothic-M";
  font-weight: bold;
   src: local("YoGothic-Bold"),
      local("Yu Gothic");
}

html {
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  background-color: #f4f8fa;
  font-size: 1.6rem;
  font-family: -apple-system, blinkMacSystemFont, YuGothic-M, YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  -webkit-text-size-adjust: 100%;
  font-feature-settings: "palt";
}
button {
  -webkit-appearance: none;
}

/*input[type=text]    {
    -webkit-border-radius : 0;
    -webkit-appearance : none;
    -webkit-tap-highlight-color : rgba(0,0,0,0);
}*/
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
