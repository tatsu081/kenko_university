<template>
  <v-container style="max-width: 600px">
    <h1>LINE BOT TEST</h1>
    <v-text-field outlined label="name" v-model="name"></v-text-field>
    <v-text-field outlined label="mail" v-model="mail"></v-text-field>
    <v-textarea outlined label="message" v-model="message"></v-textarea>
    <div class="d-flex justify-center flex-column">
      <v-btn large outlined width="200px" class="mx-auto" @click="onSubmit"
      >send</v-btn
      >
      <p class="text-center red--text" v-if="notFilled">Fill all fields!</p>
    </div>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  async asyncData({ query }) {},
  created() {},
  mounted() {
    console.log();
  },
  data() {
    return {
      name: null,
      mail: null,
      message: null,
      notFilled: false,
    };
  },
  computed: {},
  methods: {
    async onSubmit() {
      if (!this.name || !this.mail || !this.message) {
        this.notFilled = true;
        return;
      }
      this.notFilled = false;

      const call = firebase.functions().httpsCallable("sendMessage");
      const res = await call({
        name: this.name,
        mail: this.mail,
        message: this.message,
      }).then((res) => {
        return res;
      });
      alert('送信完了しました。')
      console.log({ res });
    },
  },
  watch: {},
};
</script>

<style>
</style>
