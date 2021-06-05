<template>
  <div>
    <div class="twoColumn__container">
      <ul class="blog__container"　style="padding:0;">
        <li
          v-for="content in contents" :key="content.id" class="blog__box">
          <blog-card :content="content"></blog-card>
        </li>
        <v-layout v-if="length > 12" row wrap justify-end style="margin: 0">
          <v-btn
            :to="'/blog/page/2'"
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
import axios from 'axios'
import sidebar from "@/components/sidebar";
import blogCard from "~/components/Organisms/Cards/BlogCard";
export default {
  head: {
    title: "ブログ一覧"
  },
  middleware: "auth",
  async asyncData() {
    const limit = 12
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/blog?limit=${limit}`,
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
  },
  components: {
    sidebar,
    blogCard,
  }
}
</script>

<style lang="scss" scoped>
.blog__main__container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}
.blog__main__container li{
  width: 30%;
  margin-right: 3%;
  margin-bottom: 5%;
}
.blog__main__container li:nth-child(3n){
  margin-right: 0;
}
.blog__main__container li img{
  width: 100%;
  height: auto;
}
.blog__main__container li p{
  font-size: 16px;
  text-align: center;
  color: black;
}
.pagination__conteiner{
  text-align: center;
}
.pagination__conteiner ul{
  display: flex;
  justify-content: center;
}
</style>
