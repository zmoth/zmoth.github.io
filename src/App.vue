<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const awesome = ref(true)

setInterval(() => {
  awesome.value = !awesome.value
}, 3000)
</script>

<template>
  <Transition name="fade" mode="out-in">
    <HelloWorld v-if="awesome" msg="Moth" />
    <HelloWorld v-else msg="织蛾" />
  </Transition>
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
