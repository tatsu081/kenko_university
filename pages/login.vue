<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="メールアドレス（必須）"
            type="email"
          ></v-text-field>
        </v-col>
        <br>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="パスワード（必須）"
            type="password"
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>
