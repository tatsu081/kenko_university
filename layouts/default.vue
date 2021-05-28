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
import Loading from "@/components/loading";
export default {
  components: {
    Header,
    Footer,
    Loading,
  }
}
</script>

