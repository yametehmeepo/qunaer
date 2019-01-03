<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'

  export default {
    name: "Index",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    background-color: #f5f5f5
</style>
