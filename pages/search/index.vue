<template>
  <div>
    <div>
      <v-form
        @submit.prevent="getPosts"
      >
        <search-form/>
      </v-form>
    </div>
    <div class="twoColumn__container">
      <template v-if="contents.length">
        <ul class="blog__container" style="padding:0;">
          <li
            v-for="content in contents" :key="content.id" class="blog__box">
            <blog-card :content="content" />
          </li>
          <v-layout v-if="length > 12" row wrap justify-end style="margin: 0">
            <v-btn
              :to="`/search/page/2?q=${$route.query.q}`"
              color="secondary"
              large
              outlined
            >次ページ ＞</v-btn>
          </v-layout>
        </ul>
      </template>
      <template v-else>検索に一致するものがありません。</template>
      <div class="sidebar__container">
        <sidebar/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import searchForm from "@/components/searchForm";
import BlogCard from "~/components/Organisms/Cards/BlogCard";
export default {
  head: {
    title: "検索",
  },
  middleware: "auth",
  data() {
    return {
      query: "",
      contents:[],
    }
  },
  // 追加
  computed: {
    isRequired() {
      return !!this.query && !/^\s+$/.test(this.query)
    },
  },
  methods: {
  async getPosts() {
    // if文でメソッド内を囲む
    if (this.isRequired) {
      const limit = 12
      const { data } = await axios.get(
          // your-service-id部分は自分のサービスidに置き換えてください
          `https://kenko-university.microcms.io/api/v1/blog?q=${this.query}&limit=${limit}`,
          {
            // your-api-key部分は自分のapi-keyに置き換えてください
            headers: { 'X-API-KEY': process.env.API_KEY }
      })
        console.log(data)
        this.contents = data.contents
        this.length = data.totalCount
      }
    },
  },
  watch: {
    '$route.query.q': {
      handler(newVal) {
        this.query = newVal
        // 1. クエリーが投げられた一番最初
        this.getPosts()
      },
      immediate: true
    }
  },
  components: {
    BlogCard,
    searchForm
  }
}
</script>
