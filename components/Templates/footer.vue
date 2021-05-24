<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__nav footer_img">
        <img src="/logo.png" alt="健康大学">
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
  border-top: 2px solid #F6F7FC;

  &__container {
    width: 90%;
    margin: 0 auto;
    display: flex;

    @include mq{
      flex-direction: column;
    }
  }

  &__nav{
    text-align: left;
    line-height: 2;
    width: 25%;

    @include mq{
      width: 100%;
      margin-bottom: 25px;
    }

    img{
      width: 150px;
      height: auto;
    }

    &__title{
      font-weight: bold;
      color: $color_b;

      @include mq{
        border-bottom: 1px solid $color_border;
      }
    }

    ul{
      padding: 0;

      li{

        a{
          font-weight: 300;
          font-size: $font-size_m;
          color: $color_b;
          transition: all 0.3s;

          &:hover{
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>
