<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from "../components/header";
import firebase from "../plugins/firebase"
export default {
  components: {
  Header
  },
}
</script>

<style lang="scss" scoped>
main{
  width: 90%;
  margin: 0 auto;
}

</style>
