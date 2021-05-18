<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__nav footer_img">
        ロゴ
      </div>
      <div class="footer__nav">
        <div class="footer__nav__title">About</div>
        <ul>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/category">Category</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>

      <div class="footer__nav">
        <div class="footer__nav__title">Legal</div>
        <ul>
          <li><nuxt-link to="">利用規約</nuxt-link></li>
        </ul>
      </div>

      <div class="footer__nav">
        <div class="footer__nav__title">Links</div>
        <ul>
          <li><nuxt-link to="">Twitter</nuxt-link></li>
          <li><nuxt-link to="">Instagram</nuxt-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  padding: 50px 0;

  &__container {
    width: 90%;
    margin: 0 auto;
    display: flex;
  }

  &__nav{
    text-align: left;
    line-height: 2;
    width: 25%;


    &__title{
      font-weight: bold;
    }

    ul{
      padding: 0;

      li{

        a{
          font-weight: normal;
          font-size: $font-size_m;
        }
      }
    }
  }
}
</style>
