import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  city: '大连'
}
const mutations = {
  Set_City(state, payload) {
    state.city = payload
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
