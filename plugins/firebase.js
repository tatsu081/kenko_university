/* eslint-disable*/
import firebase from 'firebase'

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
}

export default firebase
