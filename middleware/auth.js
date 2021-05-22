export default function ({ store, redirect }) {
  // ユーザーが認証されていない場合
  if (!store.state.user.login) {
    return redirect('/login')
  }
}
