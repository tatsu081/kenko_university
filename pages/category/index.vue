<template>
  <div class="twoColumn__container">
    <div class="blog__container">
        <div :color="color">
          <div v-for="(item, i) in categories" :key="i" class="category blog__box">
            <router-link :to="'/category/' + item.id">
              <div class="category__top">
                <v-icon :color="color" v-text="item.icon"></v-icon>
                <p v-text="item.title"></p>
              </div>
              <div class="category__bottom">
                <p v-text="item.description"></p>
              </div>
            </router-link>
          </div>
        </div>
    </div>
    <div class="sidebar__container">
      <sidebar/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import middleware from "@/.nuxt/middleware";
export default {
  // middleware: "auth",
  props: {
    color: {
      type: String,
      default: "#54AD81"
    }
  },
  data() {
    return{
      categories: [
        {
          title: "食事",
          description: "食事に対しての考え方から、実際に良かった食事法などどんどん発信していきます。食べ物で体はできています。",
          id: "meal",
          icon: "mdi-food-fork-drink"
        },
        {
          title: "運動",
          description: "健康には欠かせない運動ですが、継続が難しいもの。その継続の難しい運動をいかにして継続しているのか。いかにして結果を出しているのか？それを余すことなく発信していきます。",
          id: "exercise",
          icon: "mdi-arm-flex"
        },
        {
          title: "睡眠",
          description: "人生の1/3は睡眠です。この睡眠を最高なものにした時にさらにパフォーマンスがアップできます。睡眠の質をあげて最高のパフォーマンスを作っていきましょう！",
          id: "sleep",
          icon: "mdi-sleep"
        },
        {
          title: "禁欲",
          description: "禁欲って何ってかたもいるとは思いますが、禁欲の良さや今後へ生かしていく方法などをどんどん発信していきます。自分的には元気になるためには必須の健康法だと思ってます。",
          id: "abstinence",
          icon: "mdi-corn-off"
        },
        {
          title: "マインド",
          description: "健康への考え方をどんどん発信していきます。マインドがあってそ行動が起こせるのでそのマインドについてどんどん発信していきます。",
          id: "mind",
          icon: "mdi-thought-bubble-outline"
        },
        {
          title: "その他",
          description: "その他に関しては、上記のカテゴリー以外のことについて発信しています。",
          id: "others",
          icon: "mdi-dots-vertical-circle-outline"
        },
      ]
    }
  },
  async asyncData({ params }) {
    const categoryId = params.categoryId
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/category`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    console.log(data)
    return data
  },

}
</script>

<style lang="scss" scoped>
.category{
  padding: 20px !important;

  &__top{
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    p{
      margin:0 30px 0 !important;
      font-size: 20px;
      font-weight: bold;
      color: #333333;
    }
  }

  &__bottom{
    top: 10px;

    p{
      font-size: 14px;
      color: #787878;
      margin-bottom: 0 !important;
    }
  }
}

</style>
