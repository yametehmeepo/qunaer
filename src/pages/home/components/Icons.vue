<template>
  <div class="wrapper">
    <swiper v-if="pages.length>1" :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icons">
          <div class="icon" v-for="item in page" :key="item.id">
            <div class="img">
              <img :src="item.img" alt="">
            </div>
            <p>{{item.text}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div v-else class="icons">
      <div class="icon" v-for="item in list" :key="item.id">
        <div class="img">
          <img :src="item.img" alt="">
        </div>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Icons",
    props: {
      list: Array
    },
    data() {
      return {
        iconsPerSlide: 8,
        swiperOption: {
          pagination: '.swiper-pagination'
        }
      }
    },
    computed: {
      pages() {
        const {list, iconsPerSlide} = this
        let pages = []
        list.map((item, index) => {
          const page = Math.floor(index / iconsPerSlide)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .wrapper >>> .swiper-pagination-bullet-active {
    background-color: rgba(0, 175, 190, .8)
  }

  .wrapper
    background #fff

  .icons
    display: flex
    flex-direction: row
    flex-wrap: wrap
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom 50%
    margin-top .15rem

    .icon
      padding .1rem 0 0
      width: 25%
      display: flex
      display: -webkit-box
      flex-direction column
      align-items: center

      img
        width: 1.1rem
        height: 1.1rem

      p
        width: 100%
        margin-top .1rem
        font-size: .28rem
        line-height: 1
        text-align center
        ellipse()

</style>
