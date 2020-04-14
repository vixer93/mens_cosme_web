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
  async addProduct({ commit }, payload){
    let { data } = await axios.post("/products",
                                    payload,
                                    { headers: { 'Content-Type': 'multipart/form-data'}}
                                   )
    commit("addProduct", data)
  },

  async getProducts({commit}){
    let { data } = await axios.get("/products")
    commit("setProducts", data)
  }
}