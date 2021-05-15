<template>
  <ul>
    <li v-for="item in items">
      <a :href="'#' + item.id">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>

export default {
  name:'toc-list',
  props: [ 'items' ],
}

</script>

<style scoped>

</style>
