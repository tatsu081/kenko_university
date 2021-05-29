import firebase from "firebase";

export default function ({ store, redirect }) {
  // ユーザーが認証されていない場合
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      return redirect('/login')
    } else {
      // ユーザーはログインしていません。
    }
  })
}
