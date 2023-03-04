<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const textarea = ref<HTMLInputElement | null>(null)

const props = defineProps({
  modelValue: String,
  placeholder: { type: String, default: '' },
  autosize: { type: [Boolean], default: false },
  disabled: { type: Boolean, default: false },
  spellcheck: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e: Event) {
  let value: string = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
}

function resizeTextarea() {
  if (props.autosize === false) return
  if (textarea.value === null || textarea.value === undefined) return
  textarea.value.style.height = 'inherit' // 删除
  textarea.value.style.height = textarea.value.scrollHeight + 'px'
}

onMounted(() => {
  if (textarea.value === null || textarea.value === undefined) return
  nextTick(resizeTextarea)
})
</script>

<template>
  <textarea
    ref="textarea"
    :value="modelValue"
    :spellcheck="spellcheck"
    :placeholder="placeholder"
    @input="resizeTextarea"
    @change="emitValue"
    :disabled="disabled"
  />
</template>

<style scoped>
textarea {
  font-family: inherit;
  font-size: 1.2rem;
  color: inherit;
  background-color: initial;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: inherit;
  min-height: 10rem;
  box-sizing: border-box;
  padding: 8px 16px;
  line-height: 1.8rem;
  resize: vertical;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
}
</style>
