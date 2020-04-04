import Vue from 'vue'
import axios from '@/plugins/axios'

export const store = () => ({
  product: {},
  reviews: [],
})

export const mutations = {
  setProductAndReview(state, payload){
    state.product = payload.product
    state.reviews = payload.reviews
  },

  setReviews(state, reviews){
    state.reviews.splice(0, state.reviews.length)
    reviews.forEach(review=>{
      state.reviews.push(review)
    })
  },

  addNewReview(state, newReview){
    state.reviews.unshift(newReview)
    console.log(state.reviews)
  }
}

export const actions = {
  async getProduct({ commit }, id){
    let { data } = await axios.get(`/products/${id}`)
    commit("setProductAndReview", data)
  },

  async getAllReviews({ commit, state }, id){
    let { data } = await axios.get(`/products/${id}/reviews`)
    commit("setReviews", data)
  },

  async addReview({ commit }, { review, productId }){
    let { data } = await axios.post(`/products/${productId}/reviews`, { review })
    commit("addNewReview", data)
  }
}