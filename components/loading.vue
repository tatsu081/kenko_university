<template>
  <div class="loader-background" :class="{ 'ready' : loading }" v-if="loading">
    <img src="/animation_bg.png">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'opening/isLoading'
    })
  },
  watch: {
    isLoading: async function(next, prev) {
      if (!next && prev) {
        // ここに好きなアニメーションとかの処理
      }
    }
  },
  mounted() {
    window.addEventListener('load', async () => {
      await this.$delay(1000) // PromiseでsetTimeOut返すプラグインです
      this.endLoding()
    })
  },
  methods: {
    ...mapActions({
      endLoding: 'opening/endLoding'
    }),
  },
}
</script>

<style scoped>
.loader-background {
  background-image: url("/animation_bg.png");
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
}
.loader {
  color: #ffffff;

  border-radius: 50%;
  position: relative;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
