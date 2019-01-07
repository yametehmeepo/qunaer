<template>
  <div class="wrapper">
    <ul class="tab">
      <li :class="{active: type===1}" @click="changeActive(1)">
        境内
      </li>
      <li :class="{active: type===2}">
        境外·港澳台
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
    data() {
      return {
        type: 1
      }
    },
    methods: {
      changeActive(n) {
        this.type = n
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl';
  .wrapper
    overflow hidden
    background-color: $bgColor
    padding: 0 1rem .2rem 1rem;

    .tab
      border: 1px solid #fff
      overflow: hidden

      li
        float left
        width: 50%
        text-align: center
        font-size: .28rem
        color #fff
        line-height: .4rem
        touch-action: none;

      .active
        background #fff
        color: $bgColor
</style>
