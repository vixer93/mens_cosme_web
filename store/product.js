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
  addProduct(commit, payload){
    axios.post("/products",
               payload,
               { headers: { 'Content-Type': 'multipart/form-data'}}
              )
    .then(res => {
      commit("product/addProduct", res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
}