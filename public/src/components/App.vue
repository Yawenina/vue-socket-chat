<template>
  <div class="hero is-fullheight is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <Hello v-if="!chating" @startTalk="chating = true"></Hello>
        <StartChat v-else></StartChat>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "bulma";

import Vue from "vue";
import Hello from "./Hello.vue";
import StartChat from "./StartChat.vue";

export default Vue.extend({
  data() {
    let chating: Boolean = false;
    return {
      chating
    };
  },
  components: {
    Hello,
    StartChat
  }
});
</script>

