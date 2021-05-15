<template>
  <div>
    <div class="blog__title">
      <h1>{{ title }}</h1>
      <div class="blog__title__date">
        <v-icon
          small
        >mdi-calendar-clock</v-icon>
        <span>{{ formatDate(createdAt) }}</span>
      </div>
    </div>
    <div class="twoColumn__container">
      <div class="blog__container">
        <div class="blog__container__category">
          <v-icon
            small
          >mdi-folder</v-icon>
          <span>{{ category && category.name }}</span>
        </div>
        <div>
          <ul class="lists">
            <li :class="`list ${item.name}`" v-for="item in toc" :key="item.id">
              <n-link v-scroll-to="`#${item.id}`" to>
                {{ item.text }}
              </n-link>
            </li>
          </ul>
        </div>
        <div v-html="detail" class="content"></div>
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
import tocList from "@/components/tocList";
const VueScrollTo = require('vue-scrollto');

export default {
  data(){
    return{
      toc: [],
    }
  },
  async asyncData({ params }) {
    const {data} = await axios.get(
      `https://kenko-university.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: {'X-API-KEY': process.env.API_KEY}
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
    return {
      data,
      toc,
    };
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
  components:{
    tocList,
  },
  head() {
    return {
      title: this.title,
      meta: [
        // {
        //   hid: "description",
        //   name: "description",
        //   content: this.content.outline
        // },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.title + " - 健康大学"
        },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://node-color-ink.studio/content/" + this.content
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title
        },
        // {
        //   hid: "og:description",
        //   property: "og:description",
        //   content: this.content.description
        // },
        //{ hid: 'og:image', property: 'og:image', content: this.content.image.fields.file.url },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        { hid: "twitter:site", name: "twitter:site", content: "@futty_0123" }
      ],
      // link: [
      //   {
      //     rel: "canonical",
      //     href: "https://node-color-ink.studio/content/" + this.content.slug
      //   }
      // ]
    };
  },
}

</script>

<style scoped lang="scss">
.blog__container{
  padding: 20px 10px;
  background: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

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
      padding: 0.6em; /*文字周りの余白*/
      color: #333333; /*文字色*/
      margin: 50px 0 25px;
      font-size: 24px;
    }

    h3 {
      color: #333333; /*文字色*/
      border-bottom: dashed 2px #54AD81;
      margin: 50px 3% 25px;
      font-size: 18px;
    }

    p {
      margin: 20px 3%;
      font-size: 16px;
      line-height: 2em;
    }

    img {
      width: 90%;
      display: block;
      margin: auto;
    }

    blockquote {
      border-left: solid 3px #bdbdbd; /*左線（実線 太さ 色）*/
      margin: 0 5%;
      background-color: #f5f5f5;
      line-height: 1.5em;
      padding: 25px 0;
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



</style>
