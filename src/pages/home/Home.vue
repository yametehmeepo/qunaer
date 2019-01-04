<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-likeguess></home-likeguess>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeLikeguess from './components/LikeGuess'

  export default {
    name: "Index",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeLikeguess
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    background-color: #f5f5f5
</style>
