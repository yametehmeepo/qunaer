<template>
  <div class="header">
    <div class="left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="center">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city" class="rightbtn">
      <div class="right">
        {{city}}
        <span class="iconfont arr-down">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Header",
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  .header
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 0.86rem
    font-size: .3rem
    color: #fff
    padding: 0 0.15rem
    background: $bgColor

    .left
      margin-right .25rem

    .center
      flex: 1;
      height: .6rem
      background #fff
      padding-left .2rem
      border: 1px solid #27b5c4
      border-radius .08rem
      color: #dcdcde
      line-height: .6rem

    .rightbtn
      color: #fff
      text-decoration none

    .right
      display: flex
      flex-direction: row
      align-items center
      margin-left .18rem


      .arr-down
        font-size: .2rem
</style>
