<template>
  <div>
    <div>
      <v-carousel
        cycle
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="content in contents"
          :key="content.id"
          :src="content.image.url"
          :href="`/${content.id}`"
        ></v-carousel-item>
      </v-carousel>
    </div>

    <div class="top__title">健康大学の記事</div>
    <ul class="blog__main__container">
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <img :src="content.image.url" alt="健康大学">
          <p>{{ content.title }}</p>
          <p>{{ content.category && content.category.name }}</p>
        </nuxt-link>
      </li>
    </ul>

    <div class="top__title">健康とは？</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  async asyncData( ) {
    const limit = 6
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/blog?orders=publishedAt&limit=${limit}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
  )
    // console.log(data)
    return data
  },
}
</script>

<style lang="scss" scoped>
.top__title{
  margin: 5% auto;
  text-align: center;
  font-size: 50px;
}
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
