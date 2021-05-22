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
export default {
  head: {
    title: "ブログ一覧"
  },
  middleware: "auth",
  data() {
  },
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
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
  },
  components: {
    sidebar
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
//swiper
.swiper__container{
  width: 100%;
  position: relative;
}
.swiper__container img{
  width: 100%;
  height: auto;
}
.swiper__container h2{
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  font-size: 50px;
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
