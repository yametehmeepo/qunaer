<template>
  <div class="list">
    <div v-for="(item, index) in list" :key="index" class="list-item">
      <div class="list-title"><span></span>{{item.title}}</div>
      <div class="second-item" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailList",
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .list-item
    position: relative;
    background: #fff;
    color: #333;
    font-size: .32rem;
    line-height: .88rem;

    .list-title
      padding 0 .2rem
      border-bottom 1px solid #dadada
      ellipse()

      span
        position: relative
        left: .06rem
        top: .06rem
        display: inline-block
        width: .36rem
        height: .36rem
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem

    .second-item
      .list-title
        padding-left .4rem
</style>
