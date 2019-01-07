<template>
  <div>
    <city-header></city-header>
    <city-tabbar></city-tabbar>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-letters></city-letters>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CityTabbar from './components/Tabbar'
  import CityList from './components/List'
  import CityLetters from './components/Letters'
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
      CityList,
      CityLetters
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
