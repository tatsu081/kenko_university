<template>
  <div class="twoColumn__container">
    <div class="blog__container">
        <ul>
          <li v-for="content in contents" :key="content.id" class="category blog__box">
            <category-list :content="content" />
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
import categoryList from "~/components/categoryList";
export default {
  // middleware: "auth",
  head: {
  title: "カテゴリー"
  },
  data () {
    return {
      contents: [],
    }
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
    categoryList
  }
}
</script>

<style lang="scss" scoped>
.category{
  padding: 20px !important;

  &__top{
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    p{
      margin:0 30px 0 !important;
      font-size: 20px;
      font-weight: bold;
      color: #333333;
    }
  }

  &__bottom{
    top: 10px;

    p{
      font-size: 14px;
      color: #787878;
      margin-bottom: 0 !important;
    }
  }
}

</style>
