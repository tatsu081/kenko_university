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
        <auth-title title="新規登録"/>
      </v-card-title>

      <google-button
        @click="loginGoogle"
      />

      <auth-border />

      <div class="px-6 py-8">
        <div style="max-width:344px" class="mx-auto">
          <div class="pt-6">
              <email-input
                :email="email"
                @change="changeEmail"
              />
              <password-input
                :password="password"
                @change="changePassword"
              />
            <div class="login-btn pb-8">
              <auth-button
                @click="register"
                title="登録"
              />
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>

</template>

<script>
import {mapActions} from "vuex";
import EmailInput from "@/components/Molecules/Inputs/EmailInput";
import PasswordInput from "@/components/Molecules/Inputs/passwordInput";
import GoogleButton from "@/components/Atoms/Buttons/GoogleButton";
import AuthButton from "@/components/Atoms/Buttons/authButton";
import AuthTitle from "@/components/Atoms/Title/authTitle";
import AuthBorder from "@/components/Atoms/border/auth-border";

export default {
  components: {AuthBorder, AuthTitle, AuthButton, GoogleButton, PasswordInput, EmailInput},
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    register () {
      if (this.$store.dispatch('register', {email: this.email, password: this.password}))
        this.$router.push('/')
    },
    ...mapActions(['loginGoogle']),
    changeEmail(email){
      this.email = email
    },
    changePassword(password){
      this.password = password
    },
  },
}
</script>

<style lang="scss" scoped>
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


