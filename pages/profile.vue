<template>
  <div class="twoColumn__container">
    <div class="blog__container profile__container">
      <div v-for="content in contents" :key="content.id">
        <h1>プロフィール</h1>
        <div v-html="content.profile" class="content"></div>
      </div>
    </div>
    <div class="sidebar__container">
      <sidebar/>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar";
import axios from "axios";
export default {
  components: {
    sidebar
  },
  async asyncData( ) {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://kenko-university.microcms.io/api/v1/profile`,
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
<style lang="scss">
.profile__container{
  padding: 20px 10px;
  background: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

}

h1 {
  border-bottom: solid 3px #c8e4d3;
  position: relative;
  margin: 25px 0 50px;
  font-size: 36px;
  font-weight: 500;
}

h1:after {
  position: absolute;
  content: "";
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

</style>
