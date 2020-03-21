import axios from '@/plugins/axios'

export const store = () => ({
  newProduct: {}
})

export const mutations = {
  addProduct(store, payload){
    store.newProduct = payload
  }
}

export const actions = {
  addProduct(commit, product){
    axios.post("/products", { product })
    .then(res => {
      commit("product/addProduct", res.data)
    })
    .catch(error => {
    })
  }
}