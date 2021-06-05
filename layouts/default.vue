<template>
  <v-app>
<!--    <div v-if="$store.state.loading">-->
<!--      <Loading />-->
<!--    </div>-->
<!--    <div v-else>-->
      <Header />
      <main>
        <Nuxt />
      </main>
      <Footer />
<!--    </div>-->
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
