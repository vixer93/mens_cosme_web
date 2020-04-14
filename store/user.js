import axios from '@/plugins/axios'

export const state = () => ({
  currentUser: null,
  auth: {},
})

export const mutations = {
  setUser(state, payload){
    state.currentUser = payload
  },
  setAuth(state, payload){
    state.auth = payload
  },
  logoutUser(state){
    state.currentUser = null
    state.auth        = {}
    this.$cookies.remove('userInfo')
    this.$cookies.remove('authToken')
  }
}

export const actions = {
  async login({ commit }, userInfo){
    
  }
}