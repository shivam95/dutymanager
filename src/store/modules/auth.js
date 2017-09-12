import {SET_USER_LOGGED_IN, USER_LOGGED_OUT} from '../mutations'

const state = {
    isUserLoggedIn: false
}
const mutations = {
    [SET_USER_LOGGED_IN] (state) {
      state.isUserLoggedIn = true
    },

    [USER_LOGGED_OUT] (state) {
        state.isUserLoggedIn = false
    }
}
const getters = {
    isUserLoggedIn: state => state.isUserLoggedIn
}
  
const actions = {}
  
export default {
    state,
    mutations,
    actions,
    getters
}
