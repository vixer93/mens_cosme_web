export default ({store, app}) => {
  const session = app.$cookies.get('session')
  if (session) {
    store.commit('user/setUser', session.user)
    store.commit('user/setAuth', session.tokens)
  }
}