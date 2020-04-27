import axios from '@/plugins/axios'

export const state = () => ({
  currentUser: null,
  auth: {},
  products: [],
  reviews: [],
  favorites: [],
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
  },
  setUserProducts(state, payload){
    state.products = payload
  },
  setUserReviews(state, payload){
    state.reviews = payload
  },
  setUserFavorites(state, payload){
    state.favorites = payload
  }
}

export const actions = {
  async getUserProfile({ state, commit }){
    const { data } = await axios.get(`/users/${state.currentUser.id}`,
                                     {headers: state.auth}
                                    )
    commit('setUserProducts', data.products)
    commit('setUserReviews', data.reviews)
    commit('setUserFavorites', data.favorites)
  }
}