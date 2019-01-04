<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          autoplayDisableOnInteraction: false,
          autoplay: 3000,
          speed: 300,
          loop: true,
          pagination: '.swiper-pagination'
        }
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
    padding-bottom 31.25%

    .swiper-img
      width: 100%
</style>
