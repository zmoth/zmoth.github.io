<script setup lang="ts">
import HomeView from './views/HomeView.vue'
import SettingsView from './views/SettingsView.vue'

import { ref } from 'vue'

const drawer = ref(false)
const messages = ref<string[]>(['Moth', '织蛾'])
function text1(v: any) {
  messages.value = v.split('\n')
  messages.value = messages.value.filter((i) => i && i.trim())
}

const awesome = ref(0)

setInterval(() => {
  awesome.value++
  if (messages.value.length <= awesome.value) {
    awesome.value = 0
  }
}, 3000)

const current = ref('HomeView')
</script>

<template>
  <Transition name="fade" mode="out-in">
    <component :is="current" :key="awesome" :index="awesome">
      <div>
        <HomeView :text="messages[awesome]" @click="drawer = true" />
      </div>
    </component>
  </Transition>

  <SettingsView v-model="drawer" @change="text1" />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
