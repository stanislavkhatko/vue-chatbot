<template>

  <v-form ref="form" @submit.prevent="submit">

    <v-row class="p-chat-input">
      <v-col cols="12" md="12">
        <chat-input :disabled="chatDisabled" ref="chatInput" v-model="input" @submit="submit"></chat-input>
      </v-col>
      <chat-button :disabled="chatDisabled" :started="chatStarted" @submit="submit"></chat-button>
    </v-row>

  </v-form>

</template>

<script>
import ChatInput from "@/components/ChatInput";
import ChatButton from "@/components/ChatButton";

export default {
  name: "ChatForm",
  props: ['chatDisabled', 'chatStarted'],
  components: {ChatButton, ChatInput},
  data() {
    return {
      input: '',
    }
  },
  methods: {
    submit() {
      // If chat was not initialised
      if (!this.chatStarted) {
        this.$emit('submit')
      } else {
        // If input pass validation submit input
        if (this.$refs.form.validate()) {
          this.$emit('submit', this.input.trim())
          this.clearInput();
          this.$refs.form.resetValidation()
        }
      }
    },
    clearInput() {
      this.input = '';
    }
  }
}
</script>

<style scoped>

/*background: #ffffff;*/


</style>