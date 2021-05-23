<template>
  <v-app>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  components: {
    Header,
    Footer,
  }
}
</script>

