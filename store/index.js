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
  switchLogin(state, login) {
    commit('switchLogin')
  },
  login({ dispatch }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        dispatch('checkLogin')
        this.$router.push('/blog')
      }).catch(function (error){
        alert('メールアドレスもしくはパスワードが違う可能性があります')
    })
  },
  loginGoogle(dispatch) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(user => {
        this.$router.push('/blog')
      }).catch(function (error){
      alert('もう一度ログイン認証してください')
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
        this.$router.push('/blog')
      })
  },
  logout ({  dispatch }) {
    firebase.auth().signOut()
      .then(()=> {
        alert('ログアウトに成功しました！')
        this.$router.replace('/login')
      })
  },
  passReset (context, payload){

    firebase.auth().sendPasswordResetEmail(payload.email).then(function() {
      alert('メールを送信しました')
    }).catch(function(error) {
      alert(('メールの送信に失敗しました。もう一度ご確認ください。'))
    });
  }
}


