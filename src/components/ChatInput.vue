<template>
  <v-textarea
      @keydown="onTextareaKeydown"
      :value="value"
      @input="onInput"
      filled
      :rules="inputRules"
      :disabled="disabled"
      required
      label="Type your message"
  ></v-textarea>
</template>

<script>
export default {
  name: "ChatInput",
  props: ['value', 'disabled'],
  data() {
    return {
      error: 'test',
      inputRules: [
        v => !!v.trim() || 'Please type in your message',
      ]
    }
  },
  methods: {
    onTextareaKeydown(e) {
      if (e.keyCode === 13 && e.shiftKey) this.$emit('submit');
    },
    onInput(value) {
      this.$emit('input', value.trim());
    },
  }
}
</script>

<style scoped>

</style>