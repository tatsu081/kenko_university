/* eslint-disable*/
import firebase from 'firebase'
// import 'firebase/functions'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB0KgyPSy9XMqwGCJ-_0fM4I72HbAE1i_E",
  authDomain: "kenko-university.firebaseapp.com",
  projectId: "kenko-university",
  storageBucket: "kenko-university.appspot.com",
  messagingSenderId: "458079551199",
  appId: "1:458079551199:web:23644809ee23d5d35a736a",
  measurementId: "G-ZB1CGWD9WN"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  firebase.analytics()
}

export default firebase

// const functions = firebase.functions()

// export default function (app, inject) {
//   //inject('firestore', firestore) // this.$firestore
//   //inject('auth', auth) // this.$auth
//   inject('functions', functions)
// }
