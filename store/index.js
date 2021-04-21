import firebase from '~/plugins/firebase'

export const state = () => ({
  user: {
    uid: '',
    email: '',
    login: false,
  },
})

export const mutations = {
  getData (state, payload) {
    state.user.uid = payload.uid
    state.user.email = payload.email
  },
  switchLogin (state, login) {
    state.user.login = true
  },
  deleteLogin (state){
    state.user.login = false
  }
}

export const actions = {
  deleteLogin ({ commit }){
    commit('deleteLogin')
  },
  login({ dispatch }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        dispatch('checkLogin')
      })
  },
  checkLogin ({ commit }) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        commit('getData', { uid: user.uid, email: user.email })
        commit('switchLogin')
      } else {
        commit('deleteLogin')
      }
    })
  },
  register ({ dispatch, commit }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        dispatch('checkLogin')
      })
  },
  logout ({ context, dispatch }) {
    firebase.auth().signOut()
      .then(()=> {
        dispatch('deleteLogin')
        this.$router.replace('/login')
        alert('ログアウトに成功しました！')
      })
  }
}


