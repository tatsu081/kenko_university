<template>
  <div>
    <div class="profile__title">
      <h1>プロフィール</h1>
      <div class="profile__title__date">
        <v-icon
          small
        >mdi-calendar-clock</v-icon>
        <span>{{ formatDate(contents[0].createdAt) }}</span>
      </div>
    </div>
      <div class="twoColumn__container">
        <div class="blog__container profile__container">
          <div v-for="content in contents" :key="content.id">
            <div v-html="content.profile" class="content"></div>
          </div>
        </div>
        <div class="sidebar__container">
          <sidebar/>
        </div>
      </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar";
import axios from "axios";
export default {
  head: {
    title: "プロフィール"
  },
  middleware: "auth",
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
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
  },
}
</script>
<style lang="scss">
.profile__container{
  padding: 20px 10px;
  background: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

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
      border-bottom: dashed 2px #777777;
      margin: 25px 3% 25px;
      font-size: 18px;
      //display: inline-block;

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
.profile__title{
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
    //margin-top: 10px;
    text-align: center;

    span{
      font-size: 14px;
    }
  }
}

</style>
