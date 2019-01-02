<template>
  <div class="header">
    <div class="left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="center"></div>
    <div class="right">
      城市
      <div class="iconfont">&#xe64a;</div>
    </div>
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
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 0.86rem
    color: #fff
    background: $bgColor

    .center
      flex: 1;

    .right
      display: flex
      flex-direction: row

</style>
