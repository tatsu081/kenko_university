<template>
  <v-container style="max-width: 600px; margin: 25px auto">
    <h2 class="contact__title">お問い合わせ</h2>
    <v-text-field outlined label="お名前" v-model="name"></v-text-field>
    <v-text-field outlined label="メールアドレス" v-model="mail"></v-text-field>
    <v-textarea outlined label="メッセージ" v-model="message"></v-textarea>
    <div class="d-flex justify-center flex-column">
      <v-btn large outlined width="200px" class="mx-auto" @click="onSubmit"
      >送信</v-btn
      >
      <p class="text-center red--text" v-if="notFilled">Fill all fields!</p>
    </div>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  head: {
    title: "お問い合わせ",
    meta: [
      { hid: "og:title", property: "og:title", content: 'お問い合わせ'},
      { hid: "og:description", property: "og:description", content: '自己紹介です。'},
    ]
  },
  async asyncData({ query }) {},
  created() {},
  mounted() {
    console.log();
  },
  data() {
    return {
      name: null,
      mail: null,
      message: null,
      notFilled: false,
    };
  },
  computed: {},
  methods: {
    async onSubmit() {
      if (!this.name || !this.mail || !this.message) {
        this.notFilled = true;
        return;
      }
      this.notFilled = false;

      const call = firebase.functions().httpsCallable("sendMessage");
      const res = await call({
        name: this.name,
        mail: this.mail,
        message: this.message,
      }).then((res) => {
        return res;
      });
      alert('送信完了しました。')
      console.log({ res });
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.contact__title{
  text-align: center;
  font-size: 30px;
  margin: 20px 0;
}
</style>
