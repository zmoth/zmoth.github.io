<script setup lang="ts">
const props = defineProps({
  text: String,
})
const emit = defineEmits(['update:modelValue'])

function emitValue(e: string) {
  let value: string = e
  emit('update:modelValue', value)
}
</script>

<template>
  <textarea v-model.trim="props.text"></textarea>
</template>

<style scoped>
textarea {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 10px;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}
</style>
