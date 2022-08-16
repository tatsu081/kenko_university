<template>
  <div class="contact">
    <v-container style="max-width: 650px; padding: 25px; background-color: #fff">
      <h2 class="contact__title">お問い合わせ</h2>
      <p class="contact__description">
        以下のフォームに、お問い合わせ事項を記入の上、「送信」ボタンを押してください。<br>
        確認しだい、記入いただいたメールアドレスに返信いたします。<br>
      （ <a href="https://twitter.com/futty_0123" target="_blank">Twitter</a>のDM、<a href="https://www.instagram.com/kenko_happy_0227/?hl=ja" target="_blank">Instagram</a>のDMでもメッセージを受け付けています。)
      </p>
      <v-text-field
        outlined
        label="お名前"
        :rules="[required]"
        v-model="name">
      </v-text-field>

      <v-text-field
        outlined
        label="メールアドレス"
        v-model="email"
        :rules="[emailRules.required, emailRules.regex]"
        validate-on-blur
      ></v-text-field>

      <v-textarea
        outlined
        label="メッセージ"
        :rules="[required]"
        v-model="message"
      ></v-textarea>

      <div class="d-flex justify-center flex-column">
        <v-btn large outlined width="200px" class="mx-auto" @click="onSubmit"
        >送信</v-btn
        >
        <p class="text-center red--text" v-if="notFilled">全て入力してください</p>
      </div>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  head: {
    title: "お問い合わせ"
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      notFilled: false,
      emailRules: {
        required: (value) =>
          !!value || 'メールアドレスは必須です',
        regex: (value) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || 'メールアドレスの形式が違います'
      },
      required: value => !!value || "必ず入力してください",
    };
  },
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
      // console.log({ res });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact{
  background-color: $color_bg;
  padding: 100px 0;

  &__title{
    text-align: center;
    font-size: 30px;
    margin: 20px 0;
  }

  &__description{
    font-size: $font-size_m;
    line-height: 2.5em;

    a{
      color: #1976d2 !important;
      border-bottom: 1px solid #1976d2;
      letter-spacing: 2px;
      transition: all 0.3s;

      &:hover{
        opacity: 0.7;
      }
    }
  }
}

</style>
