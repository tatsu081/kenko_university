<template>
  <v-btn
    class="fill-width caption"
    color="#FFCB00"
    depressed
    height="48px"
    tile
    v-on="$listeners"
  >
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: "authButton",
  props:{
    title:String,
  },
}
</script>
