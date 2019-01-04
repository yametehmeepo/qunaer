<template>
  <div class='wrapper'>
    <div class="title">周末去哪儿</div>
    <ul class="list">
      <li v-for="item in list" :key="item.id" class="item">
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
    props: {
      list: Array
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
