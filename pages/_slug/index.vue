<template>
  <div>
    <div class="blog__title">
      <h1>{{ content.title }}</h1>
      <div class="blog__title__date">
        <v-icon
          small
        >mdi-calendar-clock</v-icon>
        <span>{{ formatDate(content.createdAt) }}</span>
      </div>
    </div>
    <div class="twoColumn__container">
      <div class="blog__container">
        <div class="blog__container__category">
          <v-icon
            small
          >mdi-folder</v-icon>
          <span>{{ content.category && content.category.name }}</span>
        </div>

        <div>
          <ul class="list">
            <p>目次</p>
            <li :class="`list__item ${item.name}`" v-for="item in toc" :key="item.id">
              <n-link v-scroll-to="`#${item.id}`" to>
                {{ item.text }}
              </n-link>
            </li>
          </ul>
        </div>
        <div v-html="content.detail" class="content"></div>
        <div class="twitter">
          <a href="//twitter.com/share" class="twitter-share-button" :data-text="title" :data-url="url" data-lang="ja">
          Tweet
          </a>
        </div>
        <v-btn
          onclick="window.history.back(); return false;"
          color="secondary"
          large
          outlined
          style="margin-top: 20px"
        >＜ 直前のページに戻る</v-btn>
      </div>
      <div class="sidebar__container">
        <sidebar/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const VueScrollTo = require('vue-scrollto');

export default {
  data(){
    return{
      content: {},
      toc: [],
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://kenko-university.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    const cheerio = require('cheerio');
    const $ = cheerio.load(data.detail);
    const headings = $('h1, h2, h3').toArray();
    const toc = headings.map(data => ({
      text: data.children[0].data,
      id: data.attribs.id,
      name: data.name,
    }));
    // console.log('目次', toc);
    // console.log('記事データ', data);
    return { content:data, toc };
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
  },
  head() {
    return {
      title: this.content.title,
      meta: [
        { hid: 'description', name: 'description', content: this.content.description },
        { hid: "og:type", property: "og:type", content: "article"},
        { hid: "og:url", property: "og:url", content: "https://kenko-university.web.app/" + this.content.id},
        { hid: "og:description", property: "og:description", content: this.content.description},
        { hid: 'og:image', property: 'og:image', content: this.content.image.url },
        { hid: "og:title", property: "og:title", content: this.content.title},
        { hid: "og:site_name", property: "og:site_name", content: this.content.title + " - 健康大学"},
      ],
      link: [
        { rel: "canonical", href: "https://kenko-university.web.app/" + this.content.id }
      ]
    };
  },
  mounted() {
    if (twttr) {
      twttr.widgets.load();
    }
  },
  computed: {
    title(){
      return `${this.content.title}`
    },
    url(){
      return 'https://kenko-university.web.app/'+ `${this.content.id}`
    }
  }
}
</script>

<style lang="scss">
.blog__container{
  background: #fff;

  &__category{
    display: flex;
    align-items: center;
    color: #777777;

    span{
      vertical-align: middle;
      margin-left: 10px;
      //margin-top: 5px;
      font-size: 14px;
    }
  }

  .content {

    margin: 50px 0;

    h2 {
      padding: 0.3em; /*文字周りの余白*/
      color: #333333; /*文字色*/
      margin: 50px 0 25px;
      font-size: 24px;
      border-left: 5px solid #777777;
    }

    h3 {
      color: #333333; /*文字色*/
      margin: 50px 3% 25px;
      font-size: 18px;
    }

    p {
      margin: 20px 3%;
      font-size: 16px;
      line-height: 2em;
    }

    img {
      width: 100%;
      display: block;
    }

    blockquote {
      border-left: solid 3px #bdbdbd; /*左線（実線 太さ 色）*/
      background-color: #f5f5f5;
      line-height: 2.5em;
      padding: 25px 20px 25px;
      margin-left: 3%;
    }
  }
}
.blog__title{
  width: 70%;
  margin: 25px auto 50px;

  h1 {
    position: relative;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
  }

  &__date{
    margin-top: 10px;
    text-align: center;

    span{
      font-size: 14px;
      color: #777777;
    }
  }
}

.list{
  margin-top: 30px;
  padding: 30px 0;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
  background-color: $color_bg;

  p{
    font-size: $font-size_l;
  }


  &__item {

    a{
      line-height: 3em;
      transition: ease-in-out 0.3s;

      &:hover{
        opacity: 0.7;
      }
    }
  }

  .h2 {
    padding-left: 30px;

    a{
      color: $color-main;
    }

    &:before{
      font-size: 10px;
      content: "⚫︎";
      vertical-align: middle;
    }
  }

  .h3{
    padding-left: 50px;
    font-size: $font-size_m;

    a{
      color: $color-main;
    }

    &:before{
      font-size: 10px;
      content: "⚪︎︎";
      vertical-align: middle;
    }
  }
}
</style>
