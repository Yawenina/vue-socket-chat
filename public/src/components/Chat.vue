<template>
  <div class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Chat</h1>
        <h2 class="subtitle">
          <button class="button is-primary" @click="$emit('startTalk')">Start Talk</button>
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>
