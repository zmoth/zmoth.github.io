<script setup lang="ts">
import config from '../../package.json'
import { useStorage } from '@vueuse/core'

const message = useStorage('my-store', 'Moth\n\n织蛾')

const props = defineProps({
  drawer: Boolean,
})

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

emit('change', message.value)

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
      <h2>Settings</h2>
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
    </template>

    <template #body>
      <div class="setting-content">
        <h3>Custom Slogan</h3>
        <mo-textarea v-model="message" @change="emit('change', message)"></mo-textarea>
        <button class="close-button" @click="$emit('close')">OK</button>
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

.setting-content h3 {
  float: left;
}

.setting-content button {
  float: right;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1.2em;
  font-weight: 600;
  background-color: #e0e3f3;
  cursor: pointer;
  transition: border-color 0.25s;
}
.setting-content button:hover {
  border-color: #42b983;
}
.setting-content button:focus,
.setting-content button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
