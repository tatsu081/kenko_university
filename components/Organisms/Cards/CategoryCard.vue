<template>
  <router-link :to="'/category/' + content.id">
    <div class="category__top">
      <v-icon v-text="content.icon" :color="color"></v-icon>
      <p v-text="content.name"></p>
    </div>
    <div class="category__bottom">
      <p v-text="content.description"></p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    },
    color: {
      type: String,
      default: "#54AD81"
    }
  },
}
</script>

<style scoped lang="scss">
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
