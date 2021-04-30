<template>
  <div>
    <div>
      <v-carousel cycle :show-arrows="false">
        <v-carousel-item
          v-for="content in contents"
          :key="content.id"
          :src="content.image.url"
          :href="`/${content.id}`"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <ul class="blog__main__container">
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <img :src="content.image.url" alt="" />
          <p>{{ content.title }}</p>
          <p>{{ content.category && content.category.name }}</p>
        </nuxt-link>
      </li>
    </ul>

    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="6"
        @input="toPage"
        @next="toNext"
      ></v-pagination>
    </div>
    <pagination
      query="blog"
      :length="Math.ceil(totalCount / limit)"
      :now="Number($route.query[query] || 1)"
      class="nav"
    />
  </div>
</template>

<script>
import axios from "axios";
// import middleware from "@/.nuxt/middleware";
export default {
  data() {
    return {
      page: 1,
      query: "",
    };
  },

  // middleware: "auth",
  async asyncData({ params }) {
    const page = params.p || "1";
    const categoryId = params.categoryId;
    const limit = 12;
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/blog?limit=${limit}${
        categoryId === undefined ? "" : `&filters=category[equals]${categoryId}`
      }&offset=${(page - 1) * limit}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { "X-API-KEY": process.env.API_KEY },
      }
    );
    console.log(data);
    return data;
  },

  async mounted() {
    /**
     ページ数をセット
     */
    await this.setPage();
  },
  methods: {
    setPage() {
      this.page = Number(this.$route.query.page) || 1;
    },
    toPage(num) {
      this.$router.push(`/blog/${num}`);
    },
    toNext() {
      this.$router.push(`/blog/${this.page}`);
    },
  },
  // mounted: function (){
  //   // 1ページで見れる数(12) からページ数を決める
  //   this.length = Math.ceil(this.totalCount/this.pageSize);
  //   //受け取ったすべてのデータが格納されているlistsから、0からthis.pageSize(12)までをcontentsに格納する どこからどこまでを表示するか決める
  //   this.content = this.contents.slice(0,this.pageSize)
  // },
  // methods: {
  //   pageChange(pageNum){
  //     this.contents = this.content.slice(this.pageSize * (pageNum - 1),this.pageSize * (pageNum))
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.blog__main__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}
.blog__main__container li {
  width: 30%;
  margin-right: 3%;
  margin-bottom: 5%;
}
.blog__main__container li:nth-child(3n) {
  margin-right: 0;
}
.blog__main__container li img {
  width: 100%;
  height: auto;
}
.blog__main__container li p {
  font-size: 16px;
  text-align: center;
  color: black;
}
//swiper
.swiper__container {
  width: 100%;
  position: relative;
}
.swiper__container img {
  width: 100%;
  height: auto;
}
.swiper__container h2 {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  font-size: 50px;
  color: black;
}
</style>
