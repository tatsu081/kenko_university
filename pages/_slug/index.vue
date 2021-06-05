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
          <ul class="toc-lists">
            <div class="toc-lists__title">目次</div>
            <li :class="`list ${item.name}`" v-for="item in toc" :key="item.id">
              <n-link v-scroll-to="`#${item.id}`" to>
                {{ item.text }}
              </n-link>
            </li>
          </ul>
        </div>
        <div v-html="content.detail" class="content"></div>
        <div class="twitter">
          　<a href="//twitter.com/share"
              target="_blank"
              class="twitter-share-button"
              :data-text="title"
              :data-url="url"
              data-lang="ja">
          Tweet
        </a>
        </div>
        <button onclick="window.history.back(); return false;">直前のページに戻る</button>
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
    console.log('目次', toc);
    console.log('記事データ', data);
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
        { hid: "description", name: "description", content: this.content.description },
        { hid: "og:type", property: "og:type", content: "article" },
        { hid: "og:url", property: "og:url", content: "https://kenko-university.web.app/" + this.content.id },
        { hid: "og:title", property: "og:title", content: this.content.title},
        { hid: "og:description", property: "og:description", content: this.content.description },
        { hid: 'og:image', property: 'og:image', content: this.content.image.url },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:site", name: "twitter:site", content: "@futty_0123" },
        { hid: "twitter:creator", name: "twitter:creator", content: "@futty_0123" },
      ],
      link: [
        { rel: "canonical", href: "https://kenko-university.web.app/" + this.content.id }
      ]
    };
  },
  computed: {
    title(){
      return `${this.content.title}`
    },
    url(){
      return 'https://kenko-university.web.app/'+ `${this.content.id}`
    }
  },
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
      color: #333333; /*文字色*/
      margin:  50px 0;
      font-size: 24px;
    }

    h3 {
      color: #333333; /*文字色*/
      border-bottom: dashed 2px #777777;
      margin: 25px 0;
      font-size: 18px;
      //display: inline-block;

    }

    p {
      font-size: 16px;
      line-height: 2em;
    }

    img {
      width: 100%;
      display: block;
      margin: auto;
    }

    blockquote {
      border-left: solid 3px #bdbdbd; /*左線（実線 太さ 色）*/
      margin: 0;
      background-color: #f5f5f5;
      line-height: 2em;
      padding: 25px 10px;
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

.toc-lists{
  border-top: 2px solid #54AD81;
  border-bottom: 2px solid #54AD81;
  width: 100%;
  padding: 40px 60px !important;

  &__title {
    margin-bottom: 20px;
    font-size: $font-size_xl;
  }


  .list.h2 {
    margin-bottom: 15px;

    a{
      color: rgba(0, 0, 0, 0.87) !important;
      font-size: $font-size_l;

    }
  }

  .list.h3{
    padding-left: 15px;

    a{
      color: rgba(0, 0, 0, 0.87) !important;
      line-height: 2em;
    }
  }
}
</style>
