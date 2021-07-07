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
        <h4 class="fill-width">パスワード再設定</h4>
      </v-card-title>
      <v-divider
        class="auth-border"
        style="margin: 0 auto"/>
      <div class="px-6 py-8">
        <div style="max-width:344px" class="mx-auto">
          <div class="pt-6">
            <email-input
              :email="email"
              @change="changeEmail"
            />
            <div class="login-btn pb-8">
              <v-btn
                class="fill-width caption"
                color="#FFCB00"
                depressed
                height="48px"
                tile
                style="margin-top: 20px"
                @click="passReset"
              >
                送信
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>


</template>

<script>
import EmailInput from "@/components/Molecules/Inputs/EmailInput";
export default {
  components: {EmailInput},
  head: {
    title: "パスワードリセット"
  },
  data () {
    return {
      email: '',
    }
  },
  methods:{
    passReset () {
      this.$store.dispatch('passReset', {email: this.email})
    },
    changeEmail(email){
      this.email = email
    },
  }
}
</script>

<style scoped>
.v-application .py-8 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.v-application .pt-6 {
  padding-top: 30px !important;
}
.link-caption {
  text-decoration: none;
  color: #666 !important;
  font-size: .75rem;
}

</style>

