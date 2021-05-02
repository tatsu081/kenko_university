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
  // カテゴリーページ情報取得
  async asyncData({ params }) {
    const page = params.page ;
    const categoryId = params.category ;
    const limit = 12
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/blog?limit=${limit}&filters=category[equals]${categoryId}&offset=${(page - 1) * limit}`,
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
    this.page = this.$route.params.page
  },
}
</script>

<style scoped>

</style>
