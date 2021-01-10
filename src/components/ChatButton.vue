<template>
  <v-btn :disabled="disabled && started" color="primary" @click="submitMessage" x-large class="c-chat-button">
    {{ started ? 'Send message' : 'Lets chat' }}
  </v-btn>
</template>

<script>
export default {
  name: "ChatButton",
  props: ['disabled', 'started'],
  methods: {
    submitMessage() {
      this.$emit('submit')
    }
  }
}
</script>

<style scoped>

.c-chat-button {
  margin: 0 12px 10px auto;
}

</style>