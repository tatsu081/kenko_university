<template>
    <div class="twoColumn__container">
      <ul class="blog__container"　style="padding:0;">
        <li
          v-for="content in contents" :key="content.id" class="blog__box">
          <blog-card :content="content" />
        </li>
        <v-layout justify-space-between>
          <pagination-button
            v-if="page > 1"
            :to="`${page*1 - 1}`"
            title="＜ 前ページ"
          />
          <pagination-button
            justyfy-flex-end
            v-if=" length > 12 && page < length/12"
            :to="`${page*1 + 1}`"
            title="次ページ ＞"
          />
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
import PaginationButton from "@/components/Atoms/Buttons/paginationButton";

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
    // console.log(data)
    // console.log(page)
    return data
  },
  created() {
    this.length = this.totalCount
    this.page = this.$route.params.page
  },
  components:{
    PaginationButton,
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
