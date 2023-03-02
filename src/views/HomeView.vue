<script setup lang="ts">
// import Slogen from '../components/Slogen.vue'
import { ref } from 'vue'

const props = defineProps<{ text: string[] }>()

const count = ref(0)
setInterval(() => {
  count.value++
  if (props.text.length <= count.value) {
    count.value = 0
  }
}, 3000)
</script>

<template>
  <Transition name="fade" mode="out-in" appear>
    <mo-slogen :slogen="props.text[count]" :key="props.text[count]" />
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
