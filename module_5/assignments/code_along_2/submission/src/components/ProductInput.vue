<template>
  <input type="text" v-model="message" /> <br />
  <button @click="emitData">Emit data</button>
</template>

<script>
export default {
  emits: ["message"],
  data() {
    return {
      message: "hello",
    };
  },
  methods: {
    emitData() {
      let message = this.message;
      this.$emit("message", message);
    },
  },
  inject: ["inputStyle"],
};
</script>
