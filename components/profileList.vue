<template>
  <v-card
    style="margin-top: 30px"
  >
    <v-list>
      <v-list-item to="/profile/">
        <v-list-item-content>
          <v-list-item-title class="categoryList" style="text-align: center">
            <p>Profile</p>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-text>
      <p style="margin: 0 15px 20px 15px">
        健康オタクの僕が皆さんに、最高の健康情報をシェアさせて頂きます。<br />
        今まで蓄えてきた健康への知識や行動が、みなさまの今後の人生がハッピーに繋がるように発信していきます。
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
<!--          <v-btn-->
<!--            color="#00acee"-->
<!--            href="https://twitter.com/futty_0123"-->
<!--            target="_blank"-->
<!--            rel="noopener noreferrer"-->
<!--            icon-->
<!--          >-->
<!--            <v-icon>mdi-twitter</v-icon>-->
<!--          </v-btn>-->
          <v-btn
            color="#D93177"
            href="https://www.instagram.com/kenko_happy_0227/?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
            icon
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider />
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
  padding: 0 !important;
}
</style>
