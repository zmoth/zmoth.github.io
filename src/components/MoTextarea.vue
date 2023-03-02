<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  rows: { type: Number, default: 10 },
  placeholder: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e: Event) {
  let value: string = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
</script>

<template>
  <textarea :value="modelValue" :rows="rows" :placeholder="placeholder" @change="emitValue" />
</template>

<style scoped>
textarea {
  font-family: inherit;
  font-size: 1.2rem;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 10rem;
  box-sizing: border-box;
  padding: 8px 16px;
  line-height: 1.8rem;
  resize: vertical;
  /* overflow: hidden; */
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
}
</style>
