<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto fill-width"
    flat
    max-width="640"
    style="margin: 50px auto"
  >
    <v-card-title class="text-center pa-8">
      <h4 class="fill-width">新規登録</h4>
    </v-card-title>

    <div class="googleButton__container">
      <v-btn
        class="fill-width text-capitalize caption"
        height="50px"
        width="100%"
        max-width="344px"
        outlined
        style="border-color:#979797; padding: 0 12px"
        @click="loginGoogle"
      >
        <img
          class="button-logo-img mr-4"
          src="https://madeby.google.com/static/images/google_g_logo.svg"
          style="height:24px;"
        />
        Googleで登録
      </v-btn>
    </div>

    <v-divider
      class="auth-border"
      style="margin: 30px auto 20px"
    > </v-divider>
    <div class="px-6 py-8">
      <div style="max-width:344px" class="mx-auto">
        <div class="pt-6">
          <div>
            <v-text-field
              v-model="email"
              :rules="[emailRules.required, emailRules.regex]"
              outlined
              validate-on-blur
              label="メールアドレス"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passwordRules.required, passwordRules.regex]"
              :type="passwordShow ? 'text' : 'password'"
              outlined
              name="input-password"
              label="パスワード"
              validate-on-blur
              @click:append="passwordShow = !passwordShow"
            ></v-text-field>
          </div>
          <div class="login-btn pb-8">
            <v-btn
              class="fill-width caption"
              color="#FFCB00"
              depressed
              height="48px"
              tile
              @click="register"
            >
              登録
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-card>

</template>

<script>
import {mapActions} from "vuex";

export default {
  head: {
    title: "新規登録"
  },
  data () {
    return {
      email: '',
      emailRules: {
        required: (value) =>
          !!value || 'メールアドレスは必須です',
        regex: (value) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || 'メールアドレスの形式が違います'
      },
      password: '',
      passwordShow: false,
      passwordRules: {
        required: (value) =>
          !!value || 'パスワードは必須です',
        regex: (value) =>
          /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,128}$/.test(value) ||
          '半角英数字の6文字以上で入力してください'
      }
    }
  },
  methods: {
    register () {
      if (this.$store.dispatch('register', {email: this.email, password: this.password}))
        this.$router.push('/')
    },
    ...mapActions(['loginGoogle']),
  }
}
</script>

<style>
.v-divider.theme--light{
  margin-top: 30px;
}
.v-application .py-8 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.v-application .pt-6 {
  padding-top: 10px !important;
}
.link-caption {
  text-decoration: none;
  color: #666666 !important;
  font-size: .75rem;
}
.separator {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #fff;
  position: relative;
}
.middle_separator {
  position: absolute;
  padding: 0 16px;
  color: #ccc;
  background: #fff;
  font-size: 11px;
  text-shadow: 0 1px 0 #fff;
  text-transform: uppercase;
  top: -7px;
  left: 30%;
}
.middle_separator {
  color: #777;
  font-size: 13px;
  top: -9px;
  left: 41%;
}
.v-card > *:last-child:not(.v-btn):not(.v-chip){
  text-align: -webkit-center;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
.login-btn{
  margin-top: 30px;
}
</style>
