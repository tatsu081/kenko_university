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
  // data (){
  //   return{
  //     profile: '{{ contents.profile }}'
  //   }
  // }
}
</script>

<style scoped>

</style>
