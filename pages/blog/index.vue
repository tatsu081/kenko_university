<template>
  <div>
    <ul class="blog__main__container">
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <img :src="content.image.url" alt="">
          <p>{{ content.title }}</p>
          <p>{{ content.category && content.category.name }}</p>
        </nuxt-link>
      </li>
    </ul>
    <v-layout v-if="length > 12" row wrap justify-end class="ma-7">
      <v-btn
        :to="'/blog/page/2'"
        color="secondary"
        large
        outlined
      >次ページ ＞</v-btn>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
// import middleware from "@/.nuxt/middleware";
import pagination from "@/components/pagination";
export default {
  // middleware: "auth",
  data() {
  },
  async asyncData() {
    const limit = 12
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/blog?limit=${limit}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    console.log(data)
    return data
  },
  created() {
    this.length = this.totalCount
  }
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
.pagination__conteiner{
  text-align: center;
}
.pagination__conteiner ul{
  display: flex;
  justify-content: center;
}

</style>
