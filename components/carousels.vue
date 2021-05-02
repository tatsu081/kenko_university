<template>
  <div>
    <v-carousel
      cycle
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="content in contents"
        :key="content.id"
        :src="content.image.url"
        :href="`/${content.id}`"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import axios from "axios"

export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://kenko-university.microcms.io/api/v1/blog?limit=6',
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

<style scoped>

</style>
