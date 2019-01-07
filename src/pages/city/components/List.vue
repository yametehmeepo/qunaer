<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <div class="citytag">
        <div class="title">您的位置</div>
        <div class="list-wrapper">
          <ul class="list">
            <li class="item">
              <span class="button active" @click="handleCityClick(mylocation)">{{mylocation}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="citytag">
        <div class="title">热门城市</div>
        <div class="list-wrapper">
          <ul class="list">
            <li class="item" v-for="item in hotCities" :key="item.id">
              <span class="button" @click="handleCityClick(item.name)">{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="citytag" v-for="(value, key) in cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="city-list-wrapper">
          <ul class="city-list">
            <li class="city-item" v-for="item in value" :key="item.id">
              <span class="city-button" @click="handleCityClick(item.name)">{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "List",
    props: {
      hotCities: Array,
      cities: Object,
      letter: String
    },
    data() {
      return {
        mylocation: '大连'
      }
    },
    methods: {
      handleCityClick(city) {
        this.setCity(city)
      },
      setCity(city) {
        this.$store.commit('Set_City', city)
        this.$router.push('/')
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/variables.styl'
  @import '~style/mixins.styl'
  .wrapper
    position: absolute;
    top: 1.52rem
    left: 0
    right 0
    bottom 0
    overflow: hidden

    .citytag
      .title
        font-size: .24rem;
        padding: .24rem .3rem;
        color: #212121;
        background-color: #f2f4f5


      .list-wrapper
        padding .1rem .6rem .1rem .3rem

        .list
          overflow: hidden
          margin-left -.2rem

          .item
            float left
            width 33.33%
            padding-left .2rem
            box-sizing border-box
            margin .1rem 0

            .button
              font-size: .28rem;
              display: block
              border 1px solid #ccc
              text-align center
              line-height: .52rem;
              border-radius 3px
              ellipse()

            .active
              border-color $bgColor
              color $bgColor

      .city-list-wrapper
        .city-list
          .city-item
            .city-button
              display: block
              font-size: .28rem
              line-height: .44rem
              padding: .2rem .6rem .2rem .3rem
              border-bottom 1px solid #ccc
              ellipse()
</style>
