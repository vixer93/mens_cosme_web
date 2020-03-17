import firebase from '@/plugins/firebase'
import axios    from '@/plugins/axios'

const authCheck = ({store,redirect}) => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const {data} = await axios.get(`/users?uid=${user.uid}`)
      store.commit('user/setUser', data)
    }else{
      store.commit('user/setUser', null)
    }
  })
}

export default authCheck