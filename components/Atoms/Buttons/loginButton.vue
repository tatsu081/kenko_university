<template>
  <v-btn
    color="#54AD81"
    rounded
    class="white--text smallButton"
    style="text-transform: none; margin-left: 10px;"
    v-on="$listeners"
  >
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  props:{
    title: String,
  }
}
</script>

<style scoped>

</style>
