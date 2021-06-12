<template>
  <v-app>
    <Loading />
    <Header />
      <main>
        <Nuxt />
      </main>
      <Footer />
  </v-app>
</template>
<script>
import Header from "../components/Templates/header";
import Footer from "../components/Templates/footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  }
};
</script>
