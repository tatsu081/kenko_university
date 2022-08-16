<template>
  <nuxt-link :to="`/${content.id}`">
    <div class="topBlog__item__top">
      <img :src="content.image.url" alt="健康大学">
    </div>
    <div class="topBlog__item__bottom">
      <div class="topBlog__item__bottom__left">{{
          content.category && content.category.name
        }}</div>
      <div class="topBlog__item__bottom__right">{{formatDate(content.createdAt)}}</div>
    </div>
    <p class="topBlog__item__title">{{ content.title }}</p>
  </nuxt-link>
</template>

<script>
export default {
name: "topBlogCard",
  props:{
    content: {
      type: Object,
      default: () => {}
    },
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy} . ${mm} . ${dd}`;
    }
  }
}
</script>

<style scoped>

</style>
