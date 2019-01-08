<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-icon">
          <span class="iconfont">&#xe674;</span>
          36
        </div>
      </div>
    </div>
    <gallary @close="handleClose" v-show="showGallary" :gallaryImgs="gallaryImgs"></gallary>
  </div>
</template>

<script>
  import Gallary from "@/components/gallary/Gallary"

  export default {
    name: "DetailBanner",
    components: {
      Gallary
    },
    data() {
      return {
        showGallary: false,
        gallaryImgs: [
          'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png',
          'http://img1.qunarzz.com/sight/p0/1709/42/426917ba25e5da3ca3.img.png_r_800x800_f7459750.png'
        ]
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
