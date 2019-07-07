import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = {
  modules: {
    geo,
    home
  },
  actions:{
    async nuxtServerInit({
      commit
    },{req, app}){
      const {status,data:{province,city}}=await app.$axios.get('/geo/getPosition')
      commit('geo/setPosition',status===200?{city,province}:{city:'',province:''})

      const {status:status1,data:{menu}}=await app.$axios.get('/geo/menu')
      console.log(menu)
      commit('home/setMenu',status1===200?menu:[])
    }

  }
}

export default store
