<script setup lang="ts">
import config from '../../package.json'
import { useStorage } from '@vueuse/core'

const defineText = '织蛾\n\nMoth'

const message = useStorage('my-store', defineText)

const props = defineProps({
  drawer: Boolean,
})

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

const emitMessage = () => {
  let s: string = message.value.trim()
  if (s === '' || s === null || s.length === 0 || s === undefined) {
    message.value = defineText
  }
  emit('change', message.value)
}

emitMessage()

function toReleaseUrl() {
  window.open('https://github.com/zmoth/zmoth.github.io/releases', '_blank')
}
function toGithubUrl() {
  window.open('https://github.com/zmoth', '_blank')
}
function toLicenseUrl() {
  window.open(
    'https://github.com/zmoth/zmoth.github.io/blob/693173c6ce59215fff36845dfadd8a997d6bf9f8/LICENCE',
    '_blank',
  )
}
</script>

<template>
  <mo-drawer :show="props.drawer" distance="100%" @close="$emit('close')">
    <template #header>
      <h1>Settings</h1>
    </template>

    <template #body>
      <div>
        <mo-tag class="tags" @click="toReleaseUrl">
          {{ config.version }}
        </mo-tag>
        <mo-tag class="tags" @click="toGithubUrl">
          {{ config.author }}
        </mo-tag>
        <mo-tag class="tags" @click="toLicenseUrl">
          {{ config.license }}
        </mo-tag>
      </div>
      <div class="setting-content">
        <h2>Slogan</h2>
        <div>
          <mo-textarea
            v-model="message"
            placeholder="\n\n division page"
            @change="emitMessage"
            autosize
          ></mo-textarea>
          <span class="close-button" @click="$emit('close')">OK</span>
        </div>
      </div>
    </template>
  </mo-drawer>
</template>

<style scoped>
.tags {
  margin: 5px;
}

.setting-content {
  font-family: inherit;
  padding: 0 10%;
}

.setting-content h2 {
  float: left;
}

.setting-content .close-button {
  float: right;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.4em 1.2em;
  font-size: 1em;
  font-weight: 600;
  background-color: #ccc;
  cursor: pointer;
  transition: border-color 0.25s;
}
.setting-content .close-button:hover {
  border-color: #42b983;
}
.setting-content .close-button:focus,
.setting-content .close-button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
