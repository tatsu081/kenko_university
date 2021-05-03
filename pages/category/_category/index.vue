<template>
  <div>
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
        <v-layout v-if="length > 12" row wrap justify-end>
          <v-btn
            :to="'/category/' + this.$route.params.category + '/page/2'"
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

  </div>
</template>

<script>
import axios from "axios";
import sidebar from "@/components/sidebar";
export default {
  // カテゴリーページ情報取得
  async asyncData({ params }) {
    const page = params.page || '1'
    const categoryId = params.category
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
    // console.log(categoryId)
    return data
  },
  created() {
    this.length = this.totalCount
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
  }
}
</script>

<style scoped>

</style>
