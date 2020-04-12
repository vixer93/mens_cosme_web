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
  }
}

export const actions = {
  async login({ commit }, userInfo){
    
  }
}