<template>
  <div class="wrapper">
    <detail-banner :gallaryImgs="gallaryImgs" :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <detail-content :categoryList="categoryList"></detail-content>
  </div>
</template>

<script>
  import DetailBanner from "./components/Banner"
  import DetailHeader from "./components/Header"
  import DetailContent from "./components/Content"
  import axios from 'axios'

  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailContent
    },
    data() {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        categoryList: []
      }
    },
    methods: {
      getDetailInfo() {
        axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        }).then(res => {
          if (res && res.data) {
            this.setDetailData(res.data)
          }
        })
      },
      setDetailData(res) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    },
    mounted() {
      this.getDetailInfo()
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    background-color: #f5f5f5
</style>
