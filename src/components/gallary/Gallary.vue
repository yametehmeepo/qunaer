<template>
  <div class="wrapper" @click="handleGallaryClick">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
        <img class="swiper-img" :src="item" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    props: {
      gallaryImgs: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observer: true,
          observeParents: true
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
