<template>
    <div>
      <h1>ログイン</h1>
      <form
        @submit.prevent>
        <label class="label">
       <span class="label">
         email
       </span>
          <input
            class="input"
            type="text"
            v-model="email"
          >
        </label>
        <label class="label">
       <span class="label">
         password
       </span>
          <input
            class="input"
            type="password"
            v-model="password"
          >
        </label>
        <button
          class="button"
          type="submit"
          @click="login"
        >
          Login
        </button>
      </form>
    </div>

</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
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
