<template>
  <div class="wrapper">
    <div class="title"><img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">本周热门榜单</div>
    <ul class="list">
      <li v-for="item in list" :key="item.id" class="item">
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
    props: {
      list: Array
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
        width: 2rem
        height 2rem

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
