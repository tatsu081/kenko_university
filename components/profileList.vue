<template>
  <v-card
    style="margin-top: 30px"
  >
    <v-list>
      <v-list-item to="/profile/">
        <v-list-item-content>
          <v-list-item-title class="title categoryList" style="text-align: center">
            <p>Profile</p>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-text>
      <p style="margin: 0 15px 20px 15px">
        健康オタクの僕が皆さんに、超健康情報になって欲しいとの思いで作成しました。
        自分の知識や今までの健康に対しての行動がみなさまの今後のハッピーに繋がれば幸いです。
        <br />
      </p>
    </v-card-text>
    <v-divider />
    <v-row no-gutters>
      <v-col cols="4">
        <v-img :src="profile_img" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8" class="profile">
        <div style="margin: 10px 10px 0 15px">
          <p>ふってぃ</p>
          <span>Webエンジニア<br>理学療法士</span>
          <br />
          <v-btn
            color="#00acee"
            href="https://twitter.com/futty_0123"
            target="_blank"
            rel="noopener noreferrer"
            icon
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider />

    <v-layout row wrap>
      <v-spacer />
      <v-btn text large to="/profile/" style="margin-right: 15px; color: #54AD81;">プロフィール詳細 ＞</v-btn>
    </v-layout>
  </v-card>
</template>

<script>
import profile_img from "@/static/profile_img.jpg";
export default {
  data () {
    return{
      profile_img
    }
  }
};
</script>

<style lang="scss">
.categoryList p {
  position: relative;
  display: inline-block;
  margin-bottom: 1em;
}
.categoryList p:before {
  content: "";
  position: absolute;
  bottom: -15px;
  display: inline-block;
  width: 60px;
  height: 5px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #54AD81;
  border-radius: 2px;
}
.profile p {
  color: #54AD81;
  position: relative;
  margin: 5px 0 0 0;
  border-bottom: solid 1px #c8e4d3;
  position: relative;
}

.profile p:after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 1px #54AD81;
  bottom: -1px;
  width: 20%;
}

.profile span {
  font-size: 9pt;
}
.v-list{
  padding: 0 0 8px;
}
</style>
