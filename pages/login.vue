<template>
  <div class="auth">
    <v-card
      :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      class="mx-auto fill-width"
      flat
      max-width="640"
      style="margin:0 auto; padding-bottom: 30px"
    >

      <v-card-title class="text-center pa-8">
        <h4 class="fill-width">ログイン</h4>
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
        style="margin: 30px auto 20px"/>
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
                style="padding:10px 0;"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required, passwordRules.regex]"
                :type="passwordShow ? 'text' : 'password'"
                outlined
                validate-on-blur
                name="input-password"
                label="パスワード"
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
                @click="login"
              >
                ログイン
              </v-btn>
            </div>
            <div class="">
              <router-link to="/register" >初めての方はこちら</router-link><br><br>
              <router-link to="/passReset">パスワードを忘れた方はこちら</router-link>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>

</template>

<script>
import {mapActions} from "vuex";

export default {
  head: {
    title: "ログイン"
  },
  methods: {
    login () {
      this.$store.dispatch('login', {email: this.email, password: this.password})
    },
    ...mapActions(['loginGoogle']),
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
          /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d)[a-zA-Z\\d]{8,32}$/.test(value) || '半角英数字の6〜32文字以内で入力してください'
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.v-application .py-8 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.v-application .pt-6 {
  padding-top: 0 !important;
}
.link-caption {
  text-decoration: none;
  color: #666 !important;
  font-size: .75rem;
}
/*.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot{*/
/*  padding: 5px 10px !important;*/
/*}*/
</style>


