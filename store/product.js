import axios from '@/plugins/axios'

export const store = () => ({
  products: [],
})

export const mutations = {
  addProduct(store, payload){
    let products = store.products
    products.unshift(payload)
    store.products = products
  },

  setProducts(store, payload){
    store.products = payload
  }
}

export const actions = {
  async addProduct({ commit, rootState }, payload){
    let { data } = await axios.post("/products",
                                    payload,
                                    { headers: { 'Content-Type': 'multipart/form-data',
                                                 ...rootState.user.auth
                                    }})
    commit("addProduct", data)
  },

  async getProducts({commit, rootState}){
    let { data } = await axios.get("/products",
                                   { headers: rootState.user.auth })
    commit("setProducts", data)
  }
}