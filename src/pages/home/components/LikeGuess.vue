<template>
  <div class="wrapper">
    <div class="title"><img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">猜你喜欢</div>
    <ul class="list">
      <li v-for="item in likeList" :key="item.id" class="item border-bottom clearfix">
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
      </li>
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
    data() {
      return {
        likeList: [{
          id: '00001',
          img: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_200x200_4ab5da75.jpg',
          title: '大连圣亚海洋世界',
          star: 4.8,
          comment: 34928,
          price: 99,
          area: '沙河口区',
          tag: '这里有会太空步的海象',
          buyStyle: 1
        }, {
          id: '00002',
          img: 'http://img1.qunarzz.com/sight/p0/1512/f2/f2b803bcf9a4a6a990.water.jpg_200x200_188907c7.jpg',
          title: '大连铭湖旅游渡假区',
          star: 4.8,
          comment: 160,
          price: 109,
          area: '瓦房店市',
          tag: '',
          buyStyle: 0
        }, {
          id: '00003',
          img: 'http://img1.qunarzz.com/sight/p0/201401/21/3ea7186ce35411ba9912312ee60803d2.jpg_200x200_f30f1242.jpg',
          title: '欢乐雪世界滑雪场',
          star: 4.0,
          comment: 46,
          price: 110,
          area: '甘井子区',
          tag: '环境优美，设施齐全，体验勇敢者冰雪盛宴',
          buyStyle: 1
        }, {
          id: '00004',
          img: 'http://img1.qunarzz.com/sight/p30/201211/09/45648b678090222593835fbb.jpg_200x200_57fe356d.jpg',
          title: '电岩炮台',
          star: 4.5,
          comment: 111,
          price: 178,
          area: '旅顺口区',
          tag: '',
          buyStyle: 0
        }, {
          id: '00005',
          img: 'http://img1.qunarzz.com/sight/p0/1602/39/39f6b1003abe1b2790.img.jpg_200x200_a7051b04.jpg',
          title: '老虎滩海洋公园',
          star: 4.2,
          comment: 22781,
          price: 50,
          area: '中山区',
          tag: '一场极地海洋动物们的盛大派对',
          buyStyle: 1
        }, {
          id: '00006',
          img: 'http://img1.qunarzz.com/sight/p0/1509/d4/e31eb1014435ca09e5f7d7d4a3feac58.water.jpg_200x200_b5242f8f.jpg',
          title: '大连香洲旅游度假区',
          star: 3.5,
          comment: 1929,
          price: 45.7,
          area: '瓦房店市',
          tag: '将壮观诠释到完美，将梦想展示给世界',
          buyStyle: 1
        }, {
          id: '00007',
          img: 'http://img1.qunarzz.com/sight/p0/1505/bc/bc0e46b7bf4dc4bd.water.jpg_200x200_9560fdd0.jpg',
          title: '林海滑雪场',
          star: 3.9,
          comment: 190,
          price: 50,
          area: '甘井子区',
          tag: '',
          buyStyle: 2
        }, {
          id: '00008',
          img: 'http://img1.qunarzz.com/sight/p0/1808/87/87cbdaa2026fb344a3.img.jpg_200x200_74d9a4a3.jpg',
          title: '汤景泽日式温泉',
          star: 4.0,
          comment: 4,
          price: 165,
          area: '大连',
          tag: '',
          buyStyle: 0
        }, {
          id: '00009',
          img: 'http://img1.qunarzz.com/sight/p0/1612/be/be00711d48ef9d4da3.water.jpg_200x200_a765adfc.jpg',
          title: '大连将军石滑雪场',
          star: 4.6,
          comment: 23,
          price: 68,
          area: '瓦房店市',
          tag: '',
          buyStyle: 0
        }, {
          id: '00010',
          img: 'http://img1.qunarzz.com/sight/p0/201310/14/83ffe2b58ebc58eec8d65eac.jpg_200x200_1471096a.jpg',
          title: '阿尔滨水上乐园',
          star: 4.8,
          comment: 161,
          price: 29,
          area: '金州区',
          tag: '大型室内全封闭嬉水娱乐园',
          buyStyle: 0
        }]
      }
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
