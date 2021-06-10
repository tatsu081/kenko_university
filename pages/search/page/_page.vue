<template>
  <div class="twoColumn__container">
    <ul class="blog__container"　style="padding:0;">
      <li
        v-for="content in contents" :key="content.id" class="blog__box">
        <blog-card :content="content" />
      </li>
      <v-layout justify-space-between>
        <v-btn
          v-if="page > 1"
          :to="`${page * 1 - 1}?q=${$route.query.q}`"
          color="secondary"
          large
          outlined
        >＜ 前ページ</v-btn>
        <v-btn
          v-if=" length > 12 && page < length/12"
          :to="`${page * 1 + 1}?q=${$route.query.q}`"
          color="secondary"
          large
          outlined
        >次ページ ＞</v-btn>
      </v-layout>
    </ul>
    <div class="sidebar__container">
      <sidebar/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sidebar from "@/components/sidebar";
import BlogCard from "~/components/Organisms/Cards/BlogCard";

export default {
  middleware: "auth",
  async asyncData( { params, query } ) {
    const page = params.page ;
    const limit = 12 ;
    // 検索ページのページング
    const {data} = await
      axios.get(`https://kenko-university.microcms.io/api/v1/blog?q=${query.q}&limit=${limit}&offset=${(page - 1) *
      limit}`, {
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
  components:{
    BlogCard,
    sidebar
  },
}
</script>
