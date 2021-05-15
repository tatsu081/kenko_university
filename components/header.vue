<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <div class="header__top__left">
          <router-link to="/" class="header__logo">ロゴ</router-link>
        </div>
        <div class="header__top__right">
          <template v-if="$store.state.user.login">
            <nuxt-link to="/search"><v-icon medium>mdi-magnify</v-icon></nuxt-link>
            <button @click="logout">ログアウト</button>
          </template>
          <template v-else>
            <router-link to="/login">ログイン</router-link>
            <router-link to="/register">新規登録</router-link>
          </template>
        </div>
      </div>
        <div v-if="$store.state.user.login" class="header__bottom" :class="{ 'fixed': scrollY > 80 }">
          <router-link to="/" class="header__bottom__link" active-class="active-list">Home</router-link>
          <router-link to="/blog" class="header__bottom__link" active-class="active-list" exact>Blog</router-link>
          <router-link to="/category" class="header__bottom__link" active-class="active-list">Category</router-link>
          <router-link to="/profile" class="header__bottom__link" active-class="active-list">Profile</router-link>
          <router-link to="/contact" class="header__bottom__link" active-class="active-list">Contact</router-link>
        </div>
    </div>
  </header>
</template>

<script>
import {mapActions} from "vuex";
export default {
  data() {
    return {
      // 座標を指定
      scrollY: 0
    }
  },
  methods: {
    ...mapActions(['logout','checkLogin']),
    handleScroll() {
      this.scrollY = window.scrollY
    },
  },
  created() {
    this.$store.dispatch('checkLogin')
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  background: #fff;
  position: relative;

  &__container{
    width: 100%;
    position: relative;
  }

  &__top{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  &__bottom{
    width: 100%;
    padding-left: 10%;
    height: 40px;
    display: flex;
    z-index: 100;
    transition: all 0.3s;
    background: #fff;

    &__link{
      font-weight: bold;
      margin-right: 15px;
      height: 100%;
      line-height: 40px;
      transition: all 0.3s;
      transform: translateX(0);
      opacity: 0.5;
      letter-spacing: 1px;

      &:hover{
        opacity: 1;
      }

    }
  }

  &__logo{
    font-size: 30px;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  &__nav{
    font-size: 16px;
  }
}
.fixed{
  position: fixed;
  top: 0;
  transition: all 0.3s;
}
//.nuxt-link-exact-active{
//  border-bottom: 3px solid #000;
//  opacity: 1;
//}
.nuxt-link-exact-active.header__bottom__link{
  border-bottom: 3px solid #000;
  opacity: 1;
}

</style>
