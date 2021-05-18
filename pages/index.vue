<template>
  <div>
    <section class="topBanner" id="topBanner">
      <div class="topBanner__container">
        <div class="topBanner__left">
          <div class="topBanner__left__main">
            タイトル
          </div>
          <div class="topBanner__left__sub">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
          <router-link to="/login">
            <v-btn
              color="#54AD81"
              rounded
              class="white--text"
            >
              login
            </v-btn>
          </router-link>
        </div>
        <div class="topBanner__right">
          <img src="/topBanner_cloud_img.svg" class="topBanner__right__cloud cloud_1">
          <img src="/topBanner_cloud_img.svg" class="topBanner__right__cloud cloud_2">
          <img src="/topBanner_img.png" class="topBanner__right__Banner">
        </div>
      </div>
    </section>

    <section class="message" id="message">
      <div class="message__container">
        <div class="title">
          <h2 class="title__mainTitle">Message</h2>
          <div class="title__subTitle">メッセージ</div>
        </div>
        <div class="message__title">
          タイトル
        </div>
        <div class="message__sub">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス<br><br>

          トテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br><br>

          トテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br><br>
        </div>
      </div>
    </section>

    <section class="blog" id="blog">
      <div class="topBlog__container">
        <div class="title">
          <h2 class="title__mainTitle">Blog</h2>
          <div class="title__subTitle">ブログ</div>
        </div>
        <ul class="topBlog__list__container">
          <li v-for="content in contents" :key="content.id" class="topBlog__item">
            <nuxt-link :to="`/${content.id}`">
              <div class="topBlog__item__top">
                <img :src="content.image.url" alt="健康大学">
              </div>
              <div class="topBlog__item__bottom">
                <div class="topBlog__item__bottom__left">{{ content.category && content.category.name }}</div>
                <div class="topBlog__item__bottom_right">{{formatDate(content.createdAt)}}</div>
              </div>
              <p class="topBlog__item__title">{{ content.title }}</p>
            </nuxt-link>
          </li>
        </ul>
        <div class="top__bigButton__container">
          <router-link to="/login">
            <v-btn
              color="#54AD81"
              rounded
              class="white--text top__bigButton"
              large
            >
              MORE
            </v-btn>
          </router-link>
        </div>
      </div>
    </section>

    <section class="bottomBanner" id="bottomBanner">
      <div class="bottomBanner__container">
        <div class="bottomBanner__left">
          <div class="bottomBanner__left__main">
            タイトル
          </div>
          <div class="bottomBanner__left__sub">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
          <router-link to="/login">
            <v-btn
              color="#54AD81"
              rounded
              class="white--text"
            >
              login
            </v-btn>
          </router-link>
        </div>
        <div class="bottomBanner__right">
          <img src="/bottomBanner.png" class="bottomBanner__right__Banner">
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  head: {
    title: "ホーム"
  },
  async asyncData( ) {
    const limit = 6
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/blog?orders=publishedAt&limit=${limit}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
  )
    // console.log(data)
    return data
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy} . ${mm} . ${dd}`;
    }
  },
}
</script>

<!--styleに関してはtop.scssに記載-->
