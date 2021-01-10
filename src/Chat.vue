<template>
  <v-app class="p-chat">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        A chat bot
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <chat-content class="p-chat-content" ref="chatContent" :chat="chat"></chat-content>
        <chat-form :chatStarted="chatStarted" @submit="sendMessage" :chatDisabled="chatDisabled"></chat-form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import axios from 'axios';
import ChatContent from "@/components/ChatContent";
import ChatForm from "@/components/ChatForm";

export default {
  name: 'Chat',
  components: {ChatContent, ChatForm},

  data: () => ({
    nextMessageIndex: 0,
    chatDisabled: true,
    chatStarted: false,
    chat: [],
    messages: [],
  }),
  mounted() {
    axios.get('/messages.json')
        .then(response => this.messages = response.data)
        .catch(error => console.log(error))
  },
  methods: {
    runChat() {
      this.chatStarted = true;
      this.chatDisabled = false;
      this.chat.push(this.messages[this.nextMessageIndex])
      this.scrollChat();

      if (this.nextMessageIndex >= this.messages.length) {
        this.finishChat();
        return;
      }

      if (!this.messages[this.nextMessageIndex].ask) setTimeout(() => {
        this.nextMessageIndex++
        this.runChat();
      }, 2000)

    },
    finishChat() {
      this.chatDisabled = true;
      // TODO send answers to api or something
      console.log(this.chat);
    },
    scrollChat() {
      // Scroll to the bottom
      this.$refs.chatContent.$el.scrollTo(0, this.$refs.chatContent.$el.scrollHeight + 10);
    },
    sendMessage(input) {

      if (!this.chatStarted) {
        this.runChat();
        return;
      }

      let message = {
        text: input,
        owner: 'me',
      }

      // Set the answer key
      if (this.messages[this.nextMessageIndex].ask) {
        message.answer = this.messages[this.nextMessageIndex].ask;
        this.nextMessageIndex++;
      }

      this.chat.push(message)
      this.scrollChat();
      this.runChat()
    }
  }
}

</script>

<style lang="scss">

</style>
