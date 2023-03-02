<script setup lang="ts">
const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e: Event) {
  let value: string = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
</script>

<template>
  <textarea :value="modelValue" @change="emitValue" rows="10" />
</template>

<style scoped>
textarea {
  font-family: inherit;
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
