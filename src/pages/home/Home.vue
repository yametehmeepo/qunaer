<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-likeguess :list="likeList"></home-likeguess>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeLikeguess from './components/LikeGuess'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'

  export default {
    name: "Index",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeLikeguess,
      HomeWeekend
    },
    data() {
      return {
        lastCity: '',
        iconList: [],
        likeList: [],
        recommendList: [],
        swiperList: [],
        weekendList: []
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city=' + this.city).then(res => {
          if (res && res.data) {
            this.setHomeInfo(res.data)
          }
        })
      },
      setHomeInfo(data) {
        let homedata = (data.ret && data.data) ? data.data : {}
        this.iconList = homedata.iconList
        this.likeList = homedata.likeList
        this.recommendList = homedata.recommendList
        this.swiperList = homedata.swiperList
        this.weekendList = homedata.weekendList
      }
    },
    mounted() {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    background-color: #f5f5f5
</style>
