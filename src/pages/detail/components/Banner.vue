<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-icon">
          <span class="iconfont">&#xe674;</span>
          36
        </div>
      </div>
    </div>
    <fade>
      <gallary @close="handleClose" v-show="showGallary" :gallaryImgs="gallaryImgs"></gallary>
    </fade>
  </div>
</template>

<script>
  import Gallary from "@/components/gallary/Gallary"
  import Fade from '@/components/fade/FadeAnimation'

  export default {
    name: "DetailBanner",
    components: {
      Gallary,
      Fade
    },
    props: {
      bannerImg: String,
      sightName: String,
      gallaryImgs: Array
    },
    data() {
      return {
        showGallary: false
      }
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true
      },
      handleClose() {
        this.showGallary = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative;
    height: 0
    overflow: hidden
    padding-bottom 55%

    &:after
      position: absolute;
      left 0
      right 0
      bottom 0
      height .6rem
      content: ""
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

    .banner-img
      width 100%

    .banner-info
      display: flex
      flex-direction: row
      position: absolute
      bottom .3rem
      left 0
      right 0
      padding: 0 .26rem
      align-items flex-end
      z-index 2

      .banner-title
        flex 1
        font-size: .36rem
        line-height: .4rem
        color #fff

      .banner-icon
        width 1.2rem
        text-align: center
        font-size: .24rem
        line-height: .4rem
        color #fff
        background-color: rgba(0, 0, 0, .4)
        border-radius .2rem

        span
          font-size: .24rem
</style>
