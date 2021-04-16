<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <div v-html="detail"></div>
    <router-link to="/">記事一覧に戻る</router-link>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://kenko-university.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': 'b683b6b8-99a7-4f01-974c-aab6ccc316f1' }
      }
    )
    return data
  },
  data() {
    return{
      detail: '　{{ content.detail }}　'
    }
  }
}
</script>
