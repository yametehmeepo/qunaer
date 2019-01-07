<template>
  <div>
    <city-header></city-header>
    <city-tabbar></city-tabbar>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CityTabbar from './components/Tabbar'

  export default {
    name: "City",
    components: {
      CityHeader,
      CityTabbar
    }
  }
</script>

<style lang="stylus" scoped>

</style>
