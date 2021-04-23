<template>
      <v-card
        :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        class="mx-auto fill-width"
        flat
        max-width="640"
      >

        <v-card-title class="text-center pa-8">
          <h4 class="fill-width">ログイン</h4>
        </v-card-title>
        <v-divider> </v-divider>
        <div class="px-6 py-8">
          <div style="max-width:344px" class="mx-auto">
            <div class="pt-6">
              <div>
                <v-text-field
                  v-model="email"
                  :rules="[emailRules.required, emailRules.regex]"
                  autofocus
                  dense
                  outlined
                  height="48px"
                  placeholder="メールアドレス"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[passwordRules.required, passwordRules.regex]"
                  :type="passwordShow ? 'text' : 'password'"
                  dense
                  outlined
                  height="48px"
                  name="input-password"
                  placeholder="パスワード"
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
            </div>
          </div>
        </div>
      </v-card>

</template>

<style>
.fill-width {
  width:60%;
  margin: 0 auto;
  text-align: center;
}
.link-caption {
  text-decoration: none;
  color: #666 !important;
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
</style>

<script>
export default {
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
    login () {
      if (this.$store.dispatch('login', {email: this.email, password: this.password}))
        this.$router.push('/')
    }
  }
}
</script>
