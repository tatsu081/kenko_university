<template>
  <div class="twoColumn__container">
    <div class="blog__container">
        <h1>{{ title }}</h1>
        <div v-html="detail" class="content"></div>
        <button onclick="window.history.back(); return false;">直前のページに戻る</button>
    </div>
    <div class="sidebar__container">
      <sidebar/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://kenko-university.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    console.log(data)
    return data
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

  h1 {
    border-bottom: solid 3px #c8e4d3;
    position: relative;
    margin: 25px 0 50px;
    font-size: 36px !important;
    font-weight: 500;
  }

  h1:after {
    position: absolute;
    content: " ";
    display: block;
    border-bottom: solid 3px #54AD81;
    bottom: -3px;
    width: 20%;
  }

  .content {

    margin: 50px 0;

    h2 {
      padding: 0.6em; /*文字周りの余白*/
      color: #333333; /*文字色*/
      background: #c8e4d3; /*背景色*/
      border-left: solid 5px #54AD81; /*左線（実線 太さ 色）*/
      margin: 50px 0 25px;
      font-size: 24px;
    }

    h3 {
      color: #54AD81; /*文字色*/
      /*線の種類（点線）2px 線色*/
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

</style>
