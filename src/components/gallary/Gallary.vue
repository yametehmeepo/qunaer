<template>
  <div class="wrapper" @click="handleGallaryClick">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1709/42/426917ba25e5da3ca3.img.png_r_800x800_f7459750.png" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          // observer: true,
          // observeParents: true
        }
      }
    },
    methods: {
      handleGallaryClick() {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
    width: 100%
    overflow: inherit

  .wrapper
    display: flex
    flex-direction: column
    justify-content center
    position: fixed;
    left 0
    right 0
    top: 0
    bottom 0
    background-color: #000
    z-index: 999

    .swiper-img
      width 100%

    .swiper-pagination
      bottom -1rem
      color #fff
</style>
