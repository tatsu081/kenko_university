<template>
  <div>
    <template v-if="$store.state.user.login">
      <button @click="logout">ログアウト</button>
      <router-link to="/category/3-ejsy668/page/1">食事</router-link>
      <router-link to="/category/yj09sw28go8/page/1">運動</router-link>
      <router-link to="/category/hb_whb4x0/page/1">睡眠</router-link>
      <router-link to="/category/qwtnich0nmkv/page/1">おな禁</router-link>
      <router-link to="/category/0auj7e89u/page/1">その他</router-link>
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
  },
  created() {
    this.$store.dispatch('checkLogin')
  }
}
</script>

<style scoped>

</style>
