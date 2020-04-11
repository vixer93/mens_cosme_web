import axios from "axios";

export default axios.create({
  baseURL: process.env.API_ENDPOINT
})

// export default ({$axios, store, app}) => {
//   $axios.create({
//     baseURL: process.env.API_ENDPOINT
//   })

  // axios.onRequest(config => {
  //   const headers = store.user.auth
  //   config.headers = headers
  // })

  // axios.onRespose(res => {
  //   if (res.headers['access-token']) {
  //     const authHeader = {
  //       'access-token': res.headers['access-token'],
  //       'client':       res.headers['client'],
  //       'expire':       res.headers['expire'],
  //       'uid':          res.headers['uid']
  //     }
  //     store.commit('user/setAuth', authHeader)

  //     const session = app.$cookies.get('session')
  //     if (session) {
  //       app.$cookies.set('session',session, {
  //         path: '/',
  //         maxAge: 60 * 60 * 24 * 7
  //       })
  //     }
  //   }
  // })
// }
