<template>
  <div class="wrapper">
    <span class="iconfont up" v-bind:style="{ width: this.star*100 / 5 + '%' }">&#xe642;&#xe642;&#xe642;&#xe642;&#xe642;</span><span
    class=" iconfont down">&#xe642;&#xe642;&#xe642;&#xe642;&#xe642;</span>
  </div>
</template>

<script>
  export default {
    props: ['star'],
    name: "Star",
    data() {
      return {
        styleObject: {
          "width": this.star / 5
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .iconfont
    font-size: .28rem

  .wrapper
    display: inline-block
    position: relative;
    height: .28rem
    line-height: .28rem
    color: #e0e0e0
    width 1.4rem

    .up
      position: absolute;
      left: 0;
      top 0
      z-index: 2
      height: .28rem
      color: #ffb436
      display: inline-block

      overflow hidden

    .down
      height: .28rem
</style>
