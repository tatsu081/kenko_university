<template>
  <input-text
    :value="email"
    :rules="[emailRules.required, emailRules.regex]"
    @change="changeEmail"
    label="メールアドレス"
  />
</template>

<script>
import InputText from "~/components/Atoms/Inputs/InputText";
export default {
  components: {InputText},
  props:{
    email: String,
  },
  data (){
    return {
      emailRules: {
        required: (value) =>
          !!value || 'メールアドレスは必須です',
        regex: (value) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || 'メールアドレスの形式が違います'
      }
    }
  },
  methods:{
    changeEmail:function (email){
      this.$emit("change",email)
    }
  }
}
</script>
