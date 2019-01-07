<template>
  <div class="letters">
    <ul>
      <li v-for="item in letters" :key="item" class="item">
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
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
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

    .item
      text-align center
      font-size: .24rem
      line-height: .32rem
      color $bgColor
</style>
