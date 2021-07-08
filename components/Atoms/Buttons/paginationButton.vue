<template>
  <v-btn
    :to="to"
    color="secondary"
    large
    outlined
  >{{ title }}</v-btn>
</template>

<script>
export default {
  name: "paginationButton",
  props:{
    title: String,
    to: [Number, String],
  }
}
</script>

<style scoped>

</style>
