<template>
  <div class="letters">
    <ul
      class="letterul"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      ref="letterUl"
    >
      <li
        v-for="item in letters"
        :key="item"
        class="item"
        :ref="item"
        @click="handleClick"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Letters",
    data() {
      return {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
      }
    },
    methods: {
      handleClick(e) {
        this.$emit('letterclick', e.target.innerText)
      },
      handleTouchStart(e) {
        e.preventDefault()
      },
      handleTouchMove(e) {
        const letterUl = this.$refs.letterUl
        const screenw = document.documentElement.clientWidth
        const ulw = letterUl.clientWidth
        const ulh = letterUl.clientHeight
        const ultop = letterUl.offsetTop
        const headerh = 76
        const x = e.touches[0].clientX
        const y = e.touches[0].clientY
        const inside = (x > screenw - ulw && x < screenw) && (y > ultop + headerh && y < ultop + headerh + ulh)
        if (inside) {
          const letterh = 16
          const index = Math.floor((y - ultop - headerh) / letterh)
          this.$emit('letterclick', this.letters[index])
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  @import '~style/mixins.styl'
  .letters
    display: flex
    flex-direction: column
    justify-content center
    position: fixed;
    top: 1.52rem
    right: 0
    bottom 0
    width .3rem

    .letterul
    .item
      text-align center
      font-size: .24rem
      line-height: .32rem
      color $bgColor
      touch-action none
</style>
