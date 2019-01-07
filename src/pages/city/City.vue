<template>
  <div>
    <city-header></city-header>
    <city-tabbar></city-tabbar>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-letters @letterclick="handleLetterClick"></city-letters>
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
        hotCities: [],
        letter: ''
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
          //onsole.log(res)
          if (res && res.data) {
            this.setCityData(res.data)
          }
        })
      },
      setCityData(data) {
        let res = data.data
        this.cities = res.cities
        this.hotCities = res.hotCities
      },
      handleLetterClick(letter) {
        this.letter = letter
      }
    },
    mounted() {
      this.getCityData()
    }
  }
</script>

<style lang="stylus" scoped>

</style>
