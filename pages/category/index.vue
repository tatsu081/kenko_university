<template>
  <div>
    <h1>カテゴリーページです。</h1>
    <ul class="blog__main__container">
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="'/category/' + content.id">
          <p>{{ content.name }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// import middleware from "@/.nuxt/middleware";
import pagination from "@/components/pagination";
export default {
  // middleware: "auth",
  data() {
    return{
      now: 1,
      length: 0,
    }
  },
  async asyncData({ params }) {
    const categoryId = params.categoryId
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/category`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    console.log(data)
    return data
  },

}
</script>

<style lang="scss" scoped>

</style>
