<template>
  <div class="wrapper">
    <div class="title"><img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">本周热门榜单</div>
    <ul class="list">
      <li v-for="item in recommendList" :key="item.id" class="item">
        <div class="img-wrapper">
          <img :src="item.img" alt="">
        </div>
        <p class="item-title">{{item.title}}</p>
        <p class="price"><span>¥{{item.price}}</span>起</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data() {
      return {
        recommendList: [{
          id: '00001',
          img: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_250x250_1ab31e91.jpg',
          title: '大连圣亚海洋世界',
          price: 99
        }, {
          id: '00002',
          img: 'http://img1.qunarzz.com/sight/p0/1707/57/5729585581b6732fa3.water.jpg_250x250_8ef0e1d8.jpg',
          title: '大连森林动物园',
          price: 48
        }, {
          id: '00003',
          img: 'http://img1.qunarzz.com/sight/p0/1602/39/39f6b1003abe1b2790.img.jpg_250x250_694444ec.jpg',
          title: '老虎滩海洋公园',
          price: 50
        }, {
          id: '00004',
          img: 'http://img1.qunarzz.com/sight/p0/201401/21/3ea7186ce35411ba9912312ee60803d2.jpg_250x250_386302c6.jpg',
          title: '欢乐雪世界滑雪场',
          price: 110
        }, {
          id: '00005',
          img: 'http://img1.qunarzz.com/sight/p0/1505/73/73be9edf4269b356.water.jpg_250x250_ca61d09e.jpg',
          title: '大连成园温泉',
          price: 60
        }, {
          id: '00006',
          img: 'http://img1.qunarzz.com/sight/p0/201310/14/83ffe2b58ebc58eec8d65eac.jpg_250x250_18402215.jpg',
          title: '阿尔滨水上乐园',
          price: 29
        }, {
          id: '00007',
          img: 'http://img1.qunarzz.com/sight/p0/1505/bc/bc0e46b7bf4dc4bd.water.jpg_250x250_101c48fc.jpg',
          title: '林海滑雪场',
          price: 50
        }, {
          id: '00008',
          img: 'http://img1.qunarzz.com/sight/p0/1512/f2/f2b803bcf9a4a6a990.water.jpg_250x250_ea72ab99.jpg',
          title: '大连铭湖旅游渡假区',
          price: 109
        }, {
          id: '00009',
          img: 'http://img1.qunarzz.com/sight/p0/1509/d4/e31eb1014435ca09e5f7d7d4a3feac58.water.jpg_250x250_d16d45e7.jpg',
          title: '大连香洲旅游度假区',
          price: 45.7
        }, {
          id: '00010',
          img: 'http://img1.qunarzz.com/sight/p30/201211/09/45648b678090222593835fbb.jpg_250x250_2e03d810.jpg',
          title: '电岩炮台',
          price: 178
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .wrapper
    background #fff
    margin-top .2rem

    .title
      font-size: .32rem
      line-height .44rem
      padding .24rem .24rem .26rem

      img
        width: .3rem
        margin-top .03rem


    .list::-webkit-scrollbar
      display: none

    .list
      padding: .1rem .24rem
      box-sizing border-box
      white-space: nowrap;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;

    .item + .item
      margin-left .12rem

    .item
      display: inline-block;
      width: 2rem

      &:nth-child(1) .img-wrapper
        &:before
          position: absolute;
          width: .84rem
          height: .4rem
          content: ""
          left: 0
          top: -2px
          background url("http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png") center center no-repeat
          background-size 100% 100%

      &:nth-child(2) .img-wrapper
        &:before
          position: absolute;
          width: .84rem
          height: .4rem
          content: ""
          left: 0
          top: -2px
          background url("http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png") center center no-repeat
          background-size 100% 100%

      &:nth-child(3) .img-wrapper
        &:before
          position: absolute;
          width: .84rem
          height: .4rem
          content: ""
          left: 0
          top: -2px
          background url("http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png") center center no-repeat
          background-size 100% 100%

      .img-wrapper
        position: relative;


        img
          width: 100%

      .item-title
        text-align center
        font-size: .24rem
        line-height .32rem
        color: #212121
        margin-top .12rem
        ellipse()

      .price
        color: #616161;
        font-size: .24rem;
        line-height: .36rem;
        text-align: center;
        ellipse()

        span
          color: #ff8300;

</style>
