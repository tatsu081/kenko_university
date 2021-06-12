import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default ({ store, req, isDev }) => {
  createPersistedState({
    key: 'kenko-university',
    paths: [
      'user',
      'loading'
    ],
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 365 }),
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}
