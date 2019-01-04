<template>
  <div class="header">
    <div class="iconfont icon">
      <router-link to="/">&#xe624;</router-link>
    </div>
    城市选择
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  .header
    position: relative;
    font-size: .32rem;
    line-height: .88rem;
    text-align: center;
    color: #fff;
    background-color: $bgColor

    .icon
      width: .8rem
      height: .88rem
      position: absolute;
      font-weight bold
      font-size: .34rem
      left 0

      a
        color: #ffffff
        text-decoration none
</style>
