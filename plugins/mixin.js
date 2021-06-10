export const delayMixin = {
  methods: {
    $delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
