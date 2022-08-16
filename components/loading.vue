<template>
  <div class="opening" :class="{ active: isActive }" v-show="isLoading">
    <div class="logo_02" :class="{ 'ready' : isLoading }"><img src="/animation_text.svg"></div>
    <div class="logo_01" :class="{ 'ready' : isLoading }"><img src="/animation_logo.png"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { delayMixin } from '~/plugins/mixin'

export default {
  mixins:[delayMixin],
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
  },
  data() {
    return {
      loading: true,
      isActive: false,
    }
  },
  async mounted() {
    await this.$delay(8000) // PromiseでsetTimeOut返すプラグインです
    this.opening()
    await this.$delay(500) // PromiseでsetTimeOut返すプラグインです
    this.endLoading()
  },
  methods: {
    opening(){
      this.isActive = !this.isActive
    },
    ...mapActions({
      endLoading: 'endLoading'
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
  //transform: translateX(0);
  z-index: 99999;
  animation-name: gradient;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  &.active{
    opacity: 0;
    transition: ease-in-out 0.5s;
    z-index: -1000;
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

  @include mq{
    left: 25%;
    width: 50%;
  }

  &.ready{
    animation-name: opening_01;
    animation-duration: 4.5s;
    animation-delay: 4.5s;
  }

  img{
    width: 100%;
    height: 100%;
  }
}

.logo_02{
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 27.5%;
  transform: translateY(-50%);
  width: 50%;
  height: auto;

  @include mq{
    left: 5%;
    width: 90%;
  }

  &.ready{
    animation-name: opening_02;
    animation-duration: 4s;
    animation-delay: 1s;
  }

  img{
    width: 100%;
    height: 100%;
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
    opacity: 1;
    transform: scale(50);
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
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
