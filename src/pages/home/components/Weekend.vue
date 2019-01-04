<template>
  <div class='wrapper'>
    <div class="title">周末去哪儿</div>
    <ul class="list">
      <li v-for="item in weekendList" :key="item.id" class="item">
        <div class="img"><img :src="item.img" alt=""></div>
        <div class="content">
          <div class="tit">{{item.title}}</div>
          <p class="desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend",
    data() {
      return {
        weekendList: [{
          id: '00001',
          img: 'http://img1.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg',
          title: '大连泡汤圣地',
          desc: '享受生活，放松自己，来一段轻松的旅程。'
        }, {
          id: '00002',
          img: 'http://img1.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg',
          title: '大连必打卡',
          desc: '爱上北方的碧海蓝天'
        }, {
          id: '00003',
          img: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
          title: '温泉水上乐园',
          desc: '泡泡温泉，吹吹海风，深觉人生美好'
        }, {
          id: '00004',
          img: 'http://img1.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg',
          title: '亲子游乐',
          desc: '来生机勃勃的森林野生动物园留下你们珍贵的足迹，这里是儿童的天堂，大人最美好的回忆'
        }, {
          id: '00005',
          img: 'http://img1.qunarzz.com/sight/source/1507/6b/70d17d828d87e1.jpg_r_640x214_6a995270.jpg',
          title: '周末游首选',
          desc: '泡温泉，戏冰雪，和宝贝尽情嗨玩整个冬日吧！抚顺给你和孩子一个不一样的冬日体验'
        },]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl';
  .title
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;

  .list
    .item
      background #fff

      .img
        width: 100%
        padding-bottom 37.9%
        height 0
        overflow hidden

        img
          display: block

      .content
        padding .14rem .2rem .2rem .2rem

        .tit
          color: #212121;
          font-size: .28rem;
          line-height: .48rem;
          ellipse()

        .desc
          color: #616161;
          font-size: .24rem;
          line-height: .42rem;
          padding-right: 1.4rem;
          ellipse()

    .item + .item
      margin-top .1rem
</style>
