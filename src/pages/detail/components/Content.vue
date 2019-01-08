<template>
  <div class="content-wrapper">
    <div class="baseinfo">
      <div class="top border-bottom">
        <div class="comment-wrap border-right">
          <p class="score"><span class="score-number">4.9</span>分 <span class="score-type">很棒</span></p>
          <p class="comment"><span class="comment-number">34988</span>条评论 <span class="strategy">12</span>条攻略</p>
          <span class="iconfont">&#xe64b;</span>
        </div>
        <div class="desc">
          <p class="name">景点简介</p>
          <p class="info">开放时间、贴士</p>
          <span class="iconfont">&#xe64b;</span>
        </div>
      </div>
      <div class="bottom">
        <span class="iconfont icon01">&#xe63f;</span>
        辽宁省大连市沙河口区中山路608-6-8号（星海广场西500米，星海公园内）
        <span class="iconfont icon02">&#xe64b;</span>
      </div>
    </div>
    <div class="qunaer-recommend">
      <div class="title border-bottom"><span class="iconfont">&#xe630;</span>去哪儿推荐</div>
      <div class="list">
        <div class="item border-bottom">
          <div class="left">
            <div class="name">【官方直销 随时入园】大连圣亚海洋世界四馆大学生票</div>
            <div class="ticket">
              <img src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png" alt="">
              16:00前随买随用
            </div>
            <div class="tag">
              <span class="type01"><img src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">自营</span>
              <span class="type02">随时退</span>
              <span class="type03">赠券￥<span>5.0</span></span>
            </div>
          </div>
          <div class="right">
            <p class="price">¥<span>99.0</span></p>
            <p class="button">预订</p>
          </div>
        </div>
        <div class="item border-bottom">
          <div class="left">
            <div class="name">【官方直销 随时入园】大连圣亚海洋世界四馆大学生票</div>
            <div class="ticket">
              <img src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png" alt="">
              16:00前随买随用
            </div>
            <div class="tag">
              <span class="type01"><img src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">自营</span>
              <span class="type02">随时退</span>
              <span class="type03">赠券￥<span>5.0</span></span>
            </div>
          </div>
          <div class="right">
            <p class="price">¥<span>99.0</span></p>
            <p class="button">预订</p>
          </div>
        </div>
        <div class="item border-bottom">
          <div class="left">
            <div class="name">【官方直销 随时入园】大连圣亚海洋世界四馆大学生票</div>
            <div class="ticket">
              <img src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png" alt="">
              16:00前随买随用
            </div>
            <div class="tag">
              <span class="type01"><img src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">自营</span>
              <span class="type02">随时退</span>
              <span class="type03">赠券￥<span>5.0</span></span>
            </div>
          </div>
          <div class="right">
            <p class="price">¥<span>99.0</span></p>
            <p class="button">预订</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ticket-wrapper">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
  import DetailList from './List'

  export default {
    name: "DetailContent",
    props: {
      categoryList: Array
    },
    components: {
      DetailList
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .content-wrapper
    position: relative;
    margin-top -.1rem

    .baseinfo

      background-color: #fff
      border-radius .1rem .1rem 0 0
      padding: .1rem .2rem 0 .2rem;

      .top
        display: flex
        flex-direction: row
        padding .1rem 0 .2rem

        .comment-wrap
          position: relative;
          width 50%

          .score
            font-size: .28rem
            color #ff8300
            line-height .44rem

            .score-number
              font-size: .44rem

          .comment
            margin-top .04rem
            font-size: .24rem
            line-height: 1
            color #9e9e9e

        .desc
          padding-left .3rem
          width 50%
          box-sizing border-box

          .name
            font-size: .28rem;
            color: #212121;
            line-height: .48rem;

          .info
            margin-top: .04rem
            color: #9e9e9e;
            font-size: .24rem;
            line-height: 1

          .iconfont
            right 0

        .iconfont
          position: absolute;
          right .15rem
          top 50%
          transform translateY(-50%)
          color: #9e9e9e;
          font-size: .28rem;

      .bottom
        position: relative;
        padding .2rem .56rem
        color: #212121;
        font-size: .28rem;
        line-height .36rem

        .icon01
          position: absolute;
          left 0
          top .16rem
          font-size: .36rem;
          color #9e9e9e

        .icon02
          position: absolute;
          right 0
          top 50%
          font-size: .28rem;
          transform translateY(-50%)

    .qunaer-recommend
      padding 0 .2rem
      background-color: #fff
      margin-top .2rem

      .title
        padding: 0 .2rem 0 0;
        color: #333;
        font-size: .32rem;
        line-height: .88rem;
        ellipse()

        .iconfont
          color #ff6e6e
          font-size: .38rem
          margin .08rem .1rem 0 0

      .list
        .item
          display: flex
          flex-direction row
          padding: .2rem 0 .24rem 0;

          .left
            flex 2.92

            .name
              margin-right: .1rem;
              line-height: .52rem;
              padding: 0;
              font-size: .3rem;

            .ticket
              display: inline-block;
              height: .32rem;
              color: #616161;
              font-size: .24rem;
              line-height: .32rem;
              white-space: nowrap;

              img
                width: .2rem;
                max-height: .32rem;
                vertical-align: 0

            .tag
              font-size: 0

              .type01
                display: inline-block;
                margin-top: .08rem;
                padding: 0 .04rem;
                color: #00afc7;
                font-size: .24rem;
                line-height: .26rem;
                white-space: nowrap;
                border 1px solid #a5e4ec

                img
                  display: inline-block;
                  width: .2rem;
                  max-height: .32rem;
                  margin-right: .04rem;
                  vertical-align: 0;

              .type02
                display: inline-block;
                margin: .08rem 0 0 .08rem
                padding: 0 .04rem;
                color: #00afc7;
                font-size: .24rem;
                line-height: .26rem;
                white-space: nowrap;
                border 1px solid #a5e4ec

              .type03
                display: inline-block;
                margin: .08rem 0 0 .08rem
                padding: 0 .04rem;
                color: #f55;
                font-size: .24rem;
                line-height: .26rem;
                white-space: nowrap;
                border 1px solid #ffb2b2

          .right
            display: flex
            flex-direction: column
            justify-content center
            flex 1
            padding-left .2rem
            text-align center

            .price
              font-size: .24rem;
              line-height: .28rem;
              text-align: center;
              color: #ff9800;

              span
                font-size: .4rem
                line-height: .4rem

            .button
              height: .6rem;
              color: #fff;
              font-size: .28rem;
              line-height: .6rem;
              border-radius: .08rem;
              background-image: linear-gradient(130deg, #ffab1e 37%, #ff8c12 100%);

    .ticket-wrapper
      margin-top .2rem
      background-color: #fff
</style>
