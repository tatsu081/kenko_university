<template>
  <ul v-if="length > 1" class="item item-pagination">

<!--    // 左矢印-->
    <li class="item">
      <nuxt-link
        :to="`${now - 1 || 1}`"
        :class="{ inactive: now === 1 }"
        class="item-link prev"
      >
        ＜
      </nuxt-link>
    </li>

<!--    // 数字の1は固定表示-->
    <li class="item">
      <nuxt-link
        :to="`1`"
        :class="{ current: now === 1 }"
        class="item-link"
      >
        1
      </nuxt-link>
    </li>

<!--    // 数字の2以降、…なのか数字になるのか条件を指定-->
    <template v-if="length >= 2">
      <template v-if="length <= 5">
      </template>
      <template v-else>
      </template>
    </template>



    <!--    // lengthが1の時は2以降は必要ないため-->
    <template v-if="length >= 2">
<!--      // lengthが5以下の時は…が不要なのでlength数に合わせて5まで書く-->
      <template v-if="length <= 5">
        <li class="item">
          <nuxt-link
            :to="`2`"
            :class="{ current: now === 2 }"
            class="item-link"
          >
            2
          </nuxt-link>
        </li>
        <template v-if="length >= 3">
          <li class="item">
            <nuxt-link
              :to="`3`"
              :class="{ current: now === 3 }"
              class="item-link"
            >
              3
            </nuxt-link>
          </li>
        </template>
        <template v-if="length >= 4">
          <li class="item">
            <nuxt-link
              :to="`4`"
              :class="{ current: now === 4 }"
              class="item-link"
            >
              4
            </nuxt-link>
          </li>
        </template>
        <template v-if="length >= 5">
          <li class="item">
            <nuxt-link
              :to="`5`"
              :class="{ current: now === 5 }"
              class="item-link"
            >
              5
            </nuxt-link>
          </li>
        </template>
      </template>
<!--      // lengthが6以上の時-->
      <template v-else>
<!--        // 現在いるページが3未満(1or 2)の時は「23…」-->
        <template v-if="now < 3">
          <li class="item">
            <nuxt-link
              :to="`2`"
              :class="{ current: now === 2 }"
              class="item-link"
            >
              2
            </nuxt-link>
          </li>
          <li class="item">
            <nuxt-link
              :to="`3`"
              :class="{ current: now === 3 }"
              class="item-link"
            >
              3
            </nuxt-link>
          </li>
          <li class="item">
            <p class="item-dot item-link">...</p>
          </li>
        </template>
<!--        // lengthからnowを引いて2未満(1)つまりlengthの1個前にいる時は「…とlength-2」-->
        <template v-else-if="length - now < 2">
          <li class="item">
            <p class="item-dot item-link">...</p>
          </li>
          <li class="item">
            <nuxt-link
              :to="`${length - 2}`"
              :class="{ current: now === length - 2 }"
              class="item-link"
            >
              {{ length - 2 }}
            </nuxt-link>
          </li>
        </template>
<!--        // それ以外の間にいる時は「…数字3つ…」-->
        <template v-else>
          <li class="item">
            <p class="item-dot item-link">...</p>
          </li>
          <li class="item">
            <nuxt-link :to="`${now - 1}`" class="item-link">
              {{ now - 1 }}
            </nuxt-link>
          </li>
          <li class="item">
            <nuxt-link :to="`${now}`" class="item-link">
              {{ now }}
            </nuxt-link>
          </li>
          <li class="item">
            <nuxt-link :to="`${now + 1}`" class="item-link">
              {{ now + 1 }}
            </nuxt-link>
          </li>
          <li v-if="length - now > 2" class="item">
            <p class="item-dot item-link">...</p>
          </li>
        </template>
<!--        // length数-->
        <li class="item">
          <nuxt-link
            :to="`${length}`"
            :class="{ current: now === length }"
            class="item-link"
          >
            {{ length }}
          </nuxt-link>
        </li>

      </template>
    </template>
    <!--    // 右矢印-->
    <li class="item">
      <nuxt-link
        :to="`${now + 1 <= length ? now + 1 : length}`"
        :class="{ inactive: now === length }"
        class="item-link next"
      >
        ＞
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      required: true,
    },
    now: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.item-pagination .nuxt-link-active{
 color: red;
}
.inactive{
  display: none;
}
</style>
