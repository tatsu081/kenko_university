<template>
    <div class="twoColumn__container">
      <ul class="blog__container" style="padding:0;">
        <li
          v-for="content in contents" :key="content.id" class="blog__box">
          <blog-card :content="content" />
        </li>
        <v-layout justify-space-between>
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
  head: {
    title: "ブログ一覧ページ",
  },
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
  components:{
    sidebar,
    BlogCard
  },
  mounted() {
    if (this.page * 1 === 1) {
      this.$router.push("/blog/");
    }
  },
}
</script>
