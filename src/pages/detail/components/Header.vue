<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-back" v-show="showBack">
      <div class="iconfont">&#xe624;</div>
    </router-link>
    <router-link tag="div" to="/" class="header-title" v-show="!showBack" :style="titleStyle">
      <div class="iconfont">&#xe624;</div>
      大连圣亚海洋世界
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        showBack: true,
        titleStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        console.log('scroll')
        const top = document.documentElement.scrollTop
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.titleStyle = {opacity}
        this.showBack = top <= 30;
      }
    },
    activated() {
      window.scrollTo(0, 0)
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  .header-back
    position: absolute;
    left .1rem
    top .1rem
    width .72rem
    height: .72rem
    border-radius 50%
    text-align center
    background-color: rgba(0, 0, 0, 0.6)

    .iconfont
      color #fff
      font-size: .34rem
      line-height .72rem
      font-weight: bold

  .header-title
    position: fixed;
    top: 0
    left 0
    right 0
    height .88rem
    font-size: .32rem
    line-height .88rem
    text-align center
    z-index 100
    background-color: $bgColor
    color: #fff

    .iconfont
      position absolute
      left 0
      top: 0
      text-align center
      font-size: .34rem
      width .8rem
      height .88rem
      line-height .88rem
      font-weight: bold
</style>
