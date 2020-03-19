<template>
  <div class="search-header">
    <input v-model="keyword" class="search-header-input" placeholder="キーワード">
    <button class="search-header-btn"><font-awesome-icon icon = "search" /></button>
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
}
</style>