<template>
  <v-app>
    <Header />
    <main>
      <Nuxt />
    </main>
  </v-app>
</template>

<script>
import Header from "../components/header";
export default {
  components: {
    Header,
  }
}
</script>
