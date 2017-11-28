<template>
  <div class="enter-name hero is-fullheight">
    <div class="has-text-centered">
      <input type="text" class="input is-primary" placeholder="请输入你的名字" v-model="username">
      <button class="button is-primary" @click="submitUserName">确定</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    let username: String = ''
    return {
      username
    }
  }
})
</script>

