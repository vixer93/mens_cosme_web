import axios from '@/plugins/axios'

export const store = () => ({
  products: [],
  newProduct: {},
})

export const mutations = {
  addProduct(store, payload){
    let products = store.products
    products.unshift(payload)
    store.products = products
    console.log(store.products)
  },

  setProducts(store, payload){
    store.products = payload
  }
}

export const actions = {
  async addProduct({commit, dispatch}, payload){
    let { data } = await axios.post("/products",
                                    payload,
                                    { headers: { 'Content-Type': 'multipart/form-data'}}
                                   )
    // commit("addProduct", data)
    dispatch("getProducts")
  },

  async getProducts({commit}){
    let { data } = await axios.get("/products")
    commit("setProducts", data)
  }
}