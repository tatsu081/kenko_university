export default function ({ store, redirect, route }) {
  const user = sessionStorage.getItem('user');
  if (user) {
    return Promise.resolve()
  } else {
    window.location.href = '/'
    return new Promise((resolve) => {
      // 完全にレンダリングされたらリダイレクトされる
    })
  }
}
