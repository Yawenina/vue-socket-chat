<template>
  <div>
    <EnterName v-if="!username"></EnterName>
    <Chat :username="username" v-else></Chat>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EnterName from './EnterName.vue'
import Chat from './Chat.vue'

export default Vue.extend({
  data() {
    let username: String = ''
    return {
      username
    }
  },
  components: {
    EnterName,
    Chat
  }
})
</script>
