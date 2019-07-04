import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'

Vue.use(Vuex)

const store = {
  modules: {
    geo
  },
  actions:{
    async nuxtServerInit({commit},{req, app}){
      const {
        status,
        data:{
          province,
          city
        }
      }=await app.$axios.get('/geo/getPosition')
      console.log(status,city,province)
      commit('geo/setPosition',status===200?{city,province}:{city:'',province:''})
    }
  }
}

export default store
