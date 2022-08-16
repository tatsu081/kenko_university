<template>
  <input-text
    :value="password"
    :rules="[passwordRules.required, passwordRules.min]"
    :type="passwordShow ? 'text' : 'password'"
    @change="changePassword"
    label="パスワード"
    style="padding:10px 0;"
  />
</template>

<script>
import InputText from "~/components/Atoms/Inputs/InputText";
export default {
  components: {InputText},
  props:{
    password: String,
  },
  data(){
    return{
      passwordShow: false,
      passwordRules: {
        required: value => !!value || 'パスワードは必須です',
        min: v => v.length >= 6 || '6文字以内で入力してください',
      },
    }
  },
  methods:{
    changePassword:function (password){
      this.$emit("change",password)
    }
  }
}
</script>
