<template>
    <div class="twoColumn__container">
      <ul class="blog__container"　style="padding:0;">
        <li
          v-for="content in contents" :key="content.id" class="blog__box">
          <nuxt-link :to="`/${content.id}`" class="blog__inner">
            <div class="blog__left">
              <img :src="content.image.url" alt="健康大学">
            </div>
            <div class="blog__right">
              <p>
                <span class="blog__right__category">{{ content.category && content.category.name }}</span>
                <span class="blog__right__date">作成日 : {{formatDate(content.createdAt)}}</span>
              </p>
              <h2 class="blog__right__title">{{ content.title }}</h2>
              <p></p>
            </div>
          </nuxt-link>
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
  components:{
    sidebar
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
  },
  mounted() {
    if (this.page * 1 === 1) {
      this.$router.push("/blog/");
    }
  },
}
</script>

<style scoped>

</style>
