import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city : {
            id: 8,
            spell: "chengdu",
            name: "成都"
        }
    },

    actions : {
        chengeClick({commit},city){
            commit('setCity',city)
        }
    },
    
    mutations :{
        setCity(state,city){
            state.city = city
        }
    }
})