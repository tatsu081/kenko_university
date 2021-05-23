<template>
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
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
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
      return `${yyyy}-${mm}-${dd}`;
    }
  }
}
</script>
