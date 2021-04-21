<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/" class="header__logo">健康大学</router-link>
      <div class="header__nav">
        <nav-before></nav-before>
      </div>
    </div>
  </header>
</template>

<script>
import navBefore from "./headerNav";
export default {
  components:{
    navBefore
  }
}
</script>

<style lang="scss" scoped>
.header{
  height: 100px;

  &__container{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
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

</style>
