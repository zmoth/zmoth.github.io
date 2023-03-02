<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  rows: { type: Number, default: 10 },
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e: Event) {
  let value: string = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
</script>

<template>
  <textarea :value="modelValue" :rows="rows" @change="emitValue" />
</template>

<style scoped>
textarea {
  font-family: inherit;
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-width: 100%;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  /* padding: 10px; */
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}
</style>
