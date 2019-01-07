<template>
  <div>
    <city-header></city-header>
    <city-tabbar></city-tabbar>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CityTabbar from './components/Tabbar'
  import CityList from './components/List'
  import axios from 'axios'

  export default {
    name: "City",
    data() {
      return {
        cities: {},
        hotCities: []
      }
    },
    components: {
      CityHeader,
      CityTabbar,
      CityList
    },
    methods: {
      getCityData() {
        axios.get('/api/city.json').then(res => {
          console.log(res)
          if (res && res.data) {
            this.setCityData(res.data)
          }
        })
      },
      setCityData(data) {
        let res = data.data
        this.cities = res.cities
        this.hotCities = res.hotCities
      }
    },
    mounted() {
      this.getCityData()
    }
  }
</script>

<style lang="stylus" scoped>

</style>
