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
    <v-layout row wrap justify-space-between class="ma-7">
      <v-btn
        v-if="page > 1"
        :to="`${page*1 - 1}`"
        color="secondary"
        large
        outlined
      >＜ 前ページ</v-btn>
      <v-btn
        v-if=" length > 12 && page < length/12"
        :to="`${page*1 + 1}`"
        color="secondary"
        large
        outlined
      >次ページ ＞</v-btn>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData( { params } ) {
    const page = params.page ;
    const limit = 12 ;
    // 一覧のページング
    const {data} = await
      axios.get(`https://kenko-university.microcms.io/api/v1/blog?limit=${limit}&offset=${(page - 1) * limit}`, {
      headers: {'X-API-KEY': process.env.API_KEY},
    })
    console.log(data)
    console.log(page)
    return data
  },
  created() {
    this.length = this.totalCount
    this.page = this.$route.params.page
  },
}
</script>

<style scoped>

</style>
