import firebase from '../plugins/firebase'

const middleware = ({ route, store, redirect }) => {
  firebase.auth().onAuthStateChanged((user) => {
    // ログインしていなければ、 /login へリダイレクトする
    if (!user && route.name !== 'login') redirect('/login')
  })
}

export default middleware
