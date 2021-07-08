<template>
  <div>
    <div class="twoColumn__container">
      <ul class="blog__container"　style="padding:0;">
        <li
          v-for="content in contents" :key="content.id" class="blog__box">
          <blog-card :content="content" />
        </li>
        <v-layout v-if="length > 12" justify-space-between>
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
  </div>
</template>

<script>
import axios from "axios";
import BlogCard from "~/components/Organisms/Cards/BlogCard";
import PaginationButton from "@/components/Atoms/Buttons/paginationButton";
import Sidebar from "@/components/sidebar";

export default {
  components: {Sidebar, PaginationButton, BlogCard},
  head: {
    title: "ページ"
  },
  middleware: "auth",
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
  mounted() {
    if (this.page * 1 === 1) {
      this.$router.push("/category/" + this.$route.params.category);
    }
  }
}
</script>
