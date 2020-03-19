<template>
  <header>
    <NavHeader/>
    <SearchHeader/>
  </header>
</template>

<script>
import NavHeader    from './nav-header'
import SearchHeader from './search-header'

export default {
  components: {
    NavHeader,
    SearchHeader,
  }
}
</script>

<style>
header {
  background-color: white;
  width: 100%;
  margin-bottom: 20px;
}
</style>