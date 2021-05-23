<template>
  <div class="twoColumn__container">
    <div class="blog__container">
        <ul>
          <li v-for="content in contents" :key="content.id" class="category blog__box">
            <category-card :content="content" />
          </li>
        </ul>
    </div>
    <div class="sidebar__container">
      <sidebar/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import categoryCard from "~/components/categoryCard";
export default {
  middleware: "auth",
  head: {
  title: "カテゴリー"
  },
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/category`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    console.log(data)
    return data
  },
  components:{
    categoryCard
  }
}
</script>

<style lang="scss" scoped>
.category {
  padding: 20px !important;
}

</style>
