import firebase from "firebase";

export default function ({ store, redirect }) {
  // ユーザーが認証されていない場合
  firebase.auth().onAuthStateChanged(user => {
    if (!store.state.user.login) {
      return redirect('/login')
    }
  })
}
