import axios from '@/plugins/axios'

export const actions = {
  async addReview({store}, { review, productId }){
    let { data } = await axios.post(`/products/${productId}/reviews`, { review })
  }
}