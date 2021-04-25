<template>
  <div>
    <section>
      <swiper :options="swiperOption">
        <swiper-slide v-for="content in contents" :key="content.id">
          <div class="swiper__container">
            <nuxt-link :to="`/${content.id}`">
              <img :src="content.image.url" alt="">
<!--              <h2>{{ content.title }}</h2>-->
            </nuxt-link>
          </div>
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </section>
    <ul class="blog__main__container">
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <img :src="content.image.url" alt="">
          <p>{{ content.title }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    // const page = params.p || '1'
    // const limit = 10
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://kenko-university.microcms.io/api/v1/blog?limit=100',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
  )
    console.log(data)
    return data
  },
  data() {
    return {
      parentRefs: null,      // ←追加
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 5000
        },
        pagenation: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1430: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          950: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  // mounted() {
  //   // ---- ↓追加 ----
  //   this.parentRefs = this.$refs.mySwiper.swiper
  // },
}
</script>

<style lang="scss" scoped>
.blog__main__container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}
.blog__main__container li{
  width: 30%;
  margin-right: 3%;
  margin-bottom: 5%;
}
.blog__main__container li:nth-child(3n){
  margin-right: 0;
}
.blog__main__container li img{
  width: 100%;
  height: auto;
}
.blog__main__container li p{
  font-size: 16px;
  text-align: center;
  color: black;
}
//swiper
.swiper__container{
  width: 100%;
  position: relative;
}
.swiper__container img{
  width: 100%;
  height: auto;
}
.swiper__container h2{
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  font-size: 50px;
  color: black;
}
</style>
