<template>
  <v-text-field
    v-model="input_text"
    :label="label"
    :rules="rules"
    :type="type"
    outlined
    validate-on-blur
    style="padding:10px 0;"
  />
</template>

<script>
export default {
  props:{
    value:String,
    label:String,
    rules: [String, Array],
    appendIcon:String,
    type: String,
  },
  computed:{
    input_text:{
      get:function (){
        return this.value
      },
      set:function (value){
        this.$emit("change",value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.theme--light.v-input{
  padding: 0 !important;
}
</style>
