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
</script>

<template>
  <mo-drawer :show="props.drawer" @close="$emit('close')">
    <template #header>
      <h2>Settings</h2>
    </template>

    <template #body>
      <mo-tag class="tags" @click="toReleaseUrl">
        {{ config.version }}
      </mo-tag>
      <mo-tag class="tags" @click="toGithubUrl">
        {{ config.author }}
      </mo-tag>
      <mo-tag class="tags"> {{ config.license }}</mo-tag>

      <h3>Custom slogan</h3>
      <!-- <mo-textarea :text="message" @change="$emit('change', message)" /> -->
      <textarea v-model.trim="message" rows="10" @change="emit('change', message)"></textarea>
    </template>
  </mo-drawer>
</template>

<style scoped>
.tags {
  margin: 5px;
}

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

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
