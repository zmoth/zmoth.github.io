<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const hue = ref(Math.random() * 360)

function onMousemove(e: any) {
  hue.value = e.clientX
}
</script>

<template>
  <h1 @mousemove="onMousemove" :style="{ color: `hsl(${hue}, 80%, 50%)` }" class="movearea"> {{ msg }}</h1>
</template>

<style scoped>
.movearea {
  transition: 0.3s color ease;
}
</style>
