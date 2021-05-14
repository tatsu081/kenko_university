<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto fill-width"
    flat
    max-width="640"
  >
    <v-card-title class="text-center pa-8">
      <h4 class="fill-width">パスワード再設定</h4>
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
              validate-on-blur
              height="48px"
              placeholder="メールアドレス"
            ></v-text-field>
          </div>
          <div class="login-btn pb-8">
            <v-btn
              class="fill-width caption"
              color="#FFCB00"
              depressed
              height="48px"
              tile
              @click="passReset"
            >
              送信
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-card>

</template>

<script>
export default {
  head: {
    title: "パスワードリセット"
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
    }
  },
  methods:{
    passReset () {
      this.$store.dispatch('passReset', {email: this.email})
    }
  }
}
</script>

<style scoped>

</style>
