<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const awesome = ref(true)

let timer = setInterval(() => {
  awesome.value = !awesome.value
}, 2500)
</script>

<template>
  <Transition name="fade" mode="out-in">
    <HelloWorld v-if="awesome" msg="Moth" />
    <HelloWorld v-else msg="织蛾" />
  </Transition>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.5s ease-out;
}

.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
