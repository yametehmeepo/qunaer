<template>
  <div class="wrapper">
    <div class="title"><img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">猜你喜欢</div>
    <ul class="list">
      <router-link
        tag="li"
        v-for="item in list"
        :key="item.id"
        class="item border-bottom clearfix"
        :to="'/detail/' + item.id"
      >
        <div class="left">
          <img :src="item.img" alt="">
          <div :class="{ 'leftcorner':true, 'buystyle01': item.buyStyle===1,'buystyle02': item.buyStyle===2}" v-if="item.buyStyle">
            {{item.buyStyle===1?'随买随用':(item.buyStyle===2?'可订明日':'')}}
          </div>
        </div>
        <div class="right">
          <div class="tit">{{item.title}}</div>
          <div class="star">
            <Star :star="item.star"></Star>
            {{item.comment}}条评论
          </div>
          <div class="priceAddress">
            <span class="price">¥<span>{{item.price}}</span></span>起
            <span class="address">{{item.area}}</span>
          </div>
          <div class="tag" v-if="item.tag"><span>{{item.tag}}</span></div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import Star from '@/components/star/Star'

  export default {
    name: "LikeGuess",
    components: {
      Star
    },
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .wrapper
    margin-top .2rem
    background #fff

    .title
      font-size: .32rem
      line-height .44rem
      padding .24rem .24rem .26rem

      img
        width: .3rem
        margin-top .03rem

    .list
      padding 0 .24rem

      .item
        padding .2rem 0

        .left
          position: relative;
          float left
          width: 2rem
          height: 2rem

          .leftcorner
            position: absolute
            width: 1rem
            left 0
            top 0
            line-height .4rem
            color: #fff
            font-size: .2rem
            text-align center


          .buystyle01
            background url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png) center center no-repeat
            background-size 100% 100%

          .buystyle02
            background url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png) center center no-repeat
            background-size 100% 100%

        .right
          overflow hidden
          padding .26rem 0 0 .2rem

          .tit
            font-size: .32rem
            line-height .44rem
            color: #212121
            ellipse()

          .star
            margin-top .14rem
            font-size: .24rem
            line-height: .34rem
            vertical-align text-bottom
            color: #616161

          .priceAddress
            margin-top .22rem
            font-size: .22rem
            position: relative;
            color: #616161
            line-height: .4rem

            .price
              color: #ff8300
              font-size: .24rem

              span
                font-size: .4rem

            .address
              position: absolute;
              right: 0

          .tag
            margin-top .4rem

            span
              color: #f55
              min-width: 0
              background-color: #fff9f9
              padding: .04rem .1rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-inline-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
</style>
