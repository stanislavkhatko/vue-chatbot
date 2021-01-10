<template>
  <div class="c-chat-content">

    <template v-for="(message, index) in chat">
      <div v-if="message" class="c-chat-content-item"  v-bind:key="index" :class="message.owner">

        <vue-typed-js v-if="message.owner === 'him'" :strings="[message.text]" :show-cursor="false">
          <div class="typing"></div>
        </vue-typed-js>

        <template v-else>{{ message.text }}</template>

      </div>
    </template>


  </div>
</template>

<script>
export default {
  name: "ChatContent",
  props: ['chat'],
}
</script>

<style scoped lang="scss">

.c-chat-content {
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  height: calc(100vh - 280px - 56px); // Calculate browser height minus form and header
  z-index: 0;
  padding: 0 0 100px 0;

  &-item {
    display: inline-block;
    clear: both;
    padding: 20px;
    border-radius: 30px;
    margin-bottom: 2px;
    font-family: Helvetica, Arial, sans-serif;
  }

  .him {
    background: #eee;
    float: left;
  }

  .me {
    float: right;
    background: #0084ff;
    color: #fff;
  }

  .him + .me {
    border-bottom-right-radius: 5px;
  }

  .me + .me {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .me:last-of-type {
    border-bottom-right-radius: 30px;
  }

}

</style>