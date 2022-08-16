<template>
  <header class="header">
    <client-only>
    <div class="header__container">
      <div class="header__top">
        <div class="header__top__left">
          <router-link to="/" class="header__logo"><img src="/logo.png" alt="健康大学"></router-link>
        </div>
        <div class="header__top__right">
          <template v-if="$store.state.user.login">
            <router-link to="/search">
              <v-icon medium>mdi-magnify</v-icon>
            </router-link>
            <login-button
              title="Logout"
              @click="logout"
            />
          </template>
          <template v-else>
            <router-link to="/login">
              <login-button
                title="Login"
              />
            </router-link>
          </template>
        </div>
      </div>


  <!-- ナビゲーション -->
        <div v-if="$store.state.user.login" class="header__bottom" :class="{ 'fixed': scrollY > 80 }">
          <router-link to="/blog" class="header__bottom__link" active-class="router-link-active">Blog</router-link>
          <router-link to="/category" class="header__bottom__link" active-class="router-link-active">Category</router-link>
          <router-link to="/profile" class="header__bottom__link" active-class="router-link-active">Profile</router-link>
          <router-link to="/contact" class="header__bottom__link" active-class="router-link-active">Contact</router-link>
        </div>
    </div>
    </client-only>
  </header>
</template>

<script>
import { mapActions } from "vuex";
import LoginButton from "@/components/Atoms/Buttons/loginButton";
export default {
  components: {LoginButton},
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
    border-bottom: 2px solid $color_border;
  }

  &__top{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    &__left{
      width: 15%;

      @include mq{
        width: 35%;
      }

      img{
        width: 150px;
        height: auto;

        @include mq{
          width: 120px;
        }
      }
    }

    &__right{

      a{
        font-weight: normal;
      }
    }
  }

  &__bottom{
    width: 100%;
    padding-left: 5%;
    height: 40px;
    display: flex;
    z-index: 100;
    transition: all 0.3s;
    background: #fff;


    &.fixed{
      position: fixed;
      top: 0;
      border-bottom: 2px solid $color_border;
      transition: all 0.3s;
  }

    &__link{
      font-weight: bold;
      margin-right: 15px;
      height: 100%;
      line-height: 40px;
      transition: all 0.3s;
      color: $color-light-font;
      letter-spacing: 1px;

      &:hover{
        color: $color_b;
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
.router-link-active.header__bottom__link{
  border-bottom: 2px solid $color_b;
  color:  $color_b;
}
.smallButton{
  width: 100px !important;
  max-width: 450px;
  height: 40px;
  color: #fff;

  @include mq(){
    width: 80px !important;
    height: 50px;
  }
}
</style>
