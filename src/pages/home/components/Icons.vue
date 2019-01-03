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
      <div class="icon" v-for="item in iconList" :key="item.id">
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
    data() {
      return {
        iconsPerSlide: 8,
        swiperOption: {
          pagination: '.swiper-pagination'
        },
        iconList: [
          {
            id: '00001',
            img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            text: '景点门票'
          },
          {
            id: '00002',
            img: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            text: '一日游'
          },
          {
            id: '00003',
            img: 'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png',
            text: '冰雪大世界'
          },
          {
            id: '00004',
            img: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            text: '动植物园'
          },
          {
            id: '00005',
            img: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            text: '大连必游'
          },
          {
            id: '00006',
            img: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
            text: '泡温泉'
          },
          {
            id: '00007',
            img: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
            text: '亲子游'
          },
          {
            id: '00008',
            img: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            text: '游乐场'
          },
          {
            id: '00009',
            img: 'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif',
            text: '年终大促'
          },
          {
            id: '00010',
            img: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
            text: '滑雪季'
          }
        ]
      }
    },
    computed: {
      pages() {
        const {iconList, iconsPerSlide} = this
        let pages = []
        iconList.map((item, index) => {
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
