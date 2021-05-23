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
.categoryList p {
  position: relative;
  display: inline-block;
  margin-bottom: 1em;
}
.categoryList p:before {
  content: "";
  position: absolute;
  bottom: -15px;
  display: inline-block;
  width: 60px;
  height: 5px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #54AD81;
  border-radius: 2px;
}
hr{
  margin: 0 !important;
}
.v-list--nav .v-list-item{
  padding: 0 20px !important;
}
.v-list{
  padding: 0;
}
.v-list--nav{
  padding: 0;
}
</style>
