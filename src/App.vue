<script setup lang="ts">
import HomeView from './views/HomeView.vue'
import SettingsView from './views/SettingsView.vue'
import { ref } from 'vue'

const s = ref(false)
const messages = ref<string[]>([])
function text(e: any) {
  messages.value = e.split('\n\n')
  messages.value = messages.value.filter((i) => i && i.trim())
}
</script>

<template>
  <HomeView :text="messages" @click="s = true" />
  <SettingsView :drawer="s" @change="text" @close="s = false" />
</template>

<style scoped></style>
