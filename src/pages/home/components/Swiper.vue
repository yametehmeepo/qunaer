<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data() {
      return {
        swiperOption: {
          autoplayDisableOnInteraction: false,
          autoplay: 3000,
          speed: 300,
          loop: true,
          pagination: '.swiper-pagination'
        },
        swiperList: [
          {
            id: '00001',
            img: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
          },
          {
            id: '00002',
            img: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper /deep/ .swiper-pagination-bullet-active {
    background #fff
  }

  .wrapper >>> .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom 0
  }

  .wrapper
    width: 100%
    height: 0
    overflow hidden
    padding-bottom 26.666666667%

    .swiper-img
      width: 100%
</style>
