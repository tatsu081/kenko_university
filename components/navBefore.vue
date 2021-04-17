<template>
  <div>
    <router-link to="/login">ログイン</router-link>
    <router-link to="/register">新規登録</router-link>
  </div>
</template>

<script>
import login from "../pages/login";
import register from "../pages/register";
export default {
  components:{
    login,
    register
  }
}
</script>

<style scoped>

</style>
