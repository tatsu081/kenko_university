<template>
  <div>
    <template v-if="$store.state.user.login">
      <button @click="logout">ログアウト</button>
    </template>
    <template v-else>
      <router-link to="/login">ログイン</router-link>
      <router-link to="/register">新規登録</router-link>
    </template>
  </div>
</template>

<script>
import login from "../pages/login";
import register from "../pages/register";
import　{ mapActions } from "vuex"
export default {
  components:{
    login,
    register
  },
  methods: {
    ...mapActions(['logout','checkLogin']),
  }
}
</script>

<style scoped>

</style>
