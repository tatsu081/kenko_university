<template>
  <div>
    <section>
      <swiper>
        <swiper-slide v-for="content in contents" :key="content.id">
          <div>
            <img :src="content.image.url" alt="">
            <h2>{{ content.title }}</h2>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <img :src="content.image.url" alt="">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://kenko-university.microcms.io/api/v1/blog',
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
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        loop: true,
      },
    }
  },
}
</script>

<style scoped>

</style>
