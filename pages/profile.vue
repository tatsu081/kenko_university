<template>
  <div class="twoColumn__container">
    <div class="blog__container">
      <div v-for="content in contents" :key="content.id">
        <h1>プロフィール</h1>
        <div v-html="content.profile"></div>
      </div>
    </div>
    <div class="sidebar__container">
      <sidebar/>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar";
import axios from "axios";
export default {
  components: {
    sidebar
  },
  async asyncData( ) {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/profile`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    console.log(data)
    return data
  },
}
</script>

<style scoped lang="scss">
.blog__container{
  padding: 20px 10px;
  background: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
</style>
