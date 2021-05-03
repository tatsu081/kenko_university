<template>
  <div class="twoColumn__container">
    <div class="blog__container">
      <h1 class="title">{{ title }}</h1>
        <div v-html="detail"></div>
        <button onclick="window.history.back(); return false;">直前のページに戻る</button>
    </div>
    <div class="sidebar__container">
      <sidebar/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://kenko-university.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return data
  },
  // data() {
  //   return{
  //     detail: '{{ content.detail }}'
  //   }
  // }
}
</script>

<style scoped lang="scss">
.blog__container{
  padding: 20px 10px;
  background: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
</style>
