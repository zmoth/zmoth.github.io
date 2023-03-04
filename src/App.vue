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

var timeOutEvent = 0 //记录触摸时长

function goTouchstart() {
  timeOutEvent = 0
  timeOutEvent = setTimeout(function () {
    timeOutEvent = 0
    //  处理长按事件...
    s.value = true
  }, 600)
}
//手如果在600毫秒内就释放，则取消长按事件
function goTouchend() {
  timeOutEvent = 0
  if (timeOutEvent !== 0) {
    //  处理单击事件
  }
}
</script>

<template>
  <HomeView :text="messages" @click="s = true" />
  <SettingsView :drawer="s" @change="text" @close="s = false" />
</template>

<style scoped></style>
