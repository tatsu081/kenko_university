import firebase from "firebase";
import Cookies from "universal-cookie";

export default ({ req, route, redirect }) => {

  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
  const userList = cookies.get("kenko-university");

  firebase.auth().onAuthStateChanged(user => {
    if (!userList.user.login) {
      return redirect('/login')
    }else{
      return false;
    }
  })
};

