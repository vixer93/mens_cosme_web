const setUserFromCookie = ( store, app ) =>{
  const userInfo = app.$cookies.get('userInfo')
  const authToken = app.$cookies.get('authToken')

  store.commit('user/setUser', userInfo)
  store.commit('user/setAuth', authToken)
}

export default ({ store, app }) => {
  app.router.afterEach(setUserFromCookie.bind(null, store, app))
}