<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  text: String,
})

const emit = defineEmits(['str'])

// function emitValue(e: string) {
//   let value: string = e
//   emit('update:text', value)
// }
</script>

<template>
  <textarea v-model.trim="text"></textarea>
</template>

<style scoped>
textarea {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  width: 80%;
  max-width: 80%;
  min-width: 80%;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}
</style>
