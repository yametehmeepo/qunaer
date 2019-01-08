<template>
  <div class="wrapper">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-content></detail-content>
  </div>
</template>

<script>
  import DetailBanner from "./components/Banner"
  import DetailHeader from "./components/Header"
  import DetailContent from "./components/Content"

  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailContent
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    background-color: #f5f5f5
</style>
