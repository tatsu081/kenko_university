<template>
  <div>
    <v-form
      @submit.prevent="submit"
    >
      <v-row
        align="center"
        style="width: 85%; margin: 50px auto 0;"
      >
        <v-col
          cols="12"
          sm="10"
          md="8"
        >
          <v-text-field
            v-model="query"
            outlined
            hide-details
            label="検索（キーワードを入力）"
            autofocus
          />
        </v-col>
        <v-col
          cols="12"
          sm="2"
          md="4"
        >
          <v-btn
            color="primary"
            @click="submit"
          >
            検索する
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    // 検索キーワードが有効な場合にtrueを返す
    validQuery() {
      return !!this.query && // 入力必須
        !/^\s+$/.test(this.query) && // 空白のみ禁止
        this.$route.query.q !== this.query // 値の変化
    }
  },
  methods: {
    submit() {
      if (this.validQuery) {
        this.$router.push({ path: '/search', query: { q: this.query } })
        this.query = ''
        // this.$refs.searchForm.blur()
      }
    }
  }
}
</script>

<style scoped>

</style>
