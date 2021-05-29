<template>
  <div class="opening" :class="{ 'ready' : loading }" v-if="loading">
    <div class="logo_01" :class="{ 'ready' : loading }"><img src="/animation_logo.png"></div>
    <div class="logo_02" :class="{ 'ready' : loading }"><img src="/animation_text.svg"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { delayMixin } from '~/plugins/mixin'

export default {
  mixins:[delayMixin],
  computed: {
    ...mapGetters({
      isLoading: 'opening/isLoading'
    })
  },
  data() {
    return {
      loading: true,
    }
  },
  watch: {
    isLoading: async function(next, prev) {
      if (!next && prev) {

      }
    }
  },
  mounted() {
    window.addEventListener('load', async () => {
      await this.$delay(5000) // PromiseでsetTimeOut返すプラグインです
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

<style scoped lang="scss">
.opening {
  background-image: url("/animation_bg.png");
  background-size: 600% 600%;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(0);
  z-index: 99999;
  animation-name: gradient;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  .ready{
    transform: translateX(100%);
  }
}

.logo_01{
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 40%;
  transform: translate(-50%,-50%);
  width: 20%;
  height: auto;
  margin: 0 auto;
}

.logo_01 img{
  width: 100%;
  height: 100%;
}

.logo_01.ready{
  animation-name: opening_01;
  animation-duration: 4.5s;
  animation-delay: 1s;
}

.logo_02{
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 27.5%;
  transform: translateY(-50%);
  width: 0;
  height: auto;
  margin: 0 auto;
}

.logo_02.ready{
  animation-name: opening_02;
  animation-duration: 5s;
  width: 45%;
  animation-delay: 5s;
}

.logo_02 img{
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 640px){
  .logo_01{
    left: 25%;
    width: 50%;
  }
  .logo_02{
    left: 10%;
    width: 80%;
  }
}

@keyframes gradient{
  0%{
    background-position: 0 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}

@keyframes opening_01{
  0%{
    opacity: 0;
    transform: translateY(0);
  }
  30%{
    opacity: 1;
    transform: translateY(-50%);
  }
  70%{
    opacity: 1;
    transform: translateY(-50%);
  }
  100%{
    opacity: 0;
    transform: translateY(-100%);
  }
}
//
//@keyframes opening_02{
//  0%{
//    opacity: 0;
//    transform: translateY(0);
//  }
//  30%{
//    opacity: 1;
//    transform: translateY(-50%);
//  }
//  100%{
//    opacity: 1;
//    transform: translateY(-50%);
//  }
//}

@keyframes opening_02{
  0%{
    opacity: 0;
    transform: translateY(0);
  }
  30%{
    opacity: 1;
    transform: translateY(-50%);
  }
  70%{
    opacity: 1;
    transform: translateY(-50%);
  }
  100%{
    opacity: 1;
    transform: scale(50);
  }
}
</style>
