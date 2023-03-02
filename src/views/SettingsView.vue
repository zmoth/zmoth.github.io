<script setup lang="ts">
import { ref } from 'vue'
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
      <el-input
        v-model="message"
        :autosize="{ minRows: 5, maxRows: 10 }"
        type="textarea"
        placeholder="Please input"
        @change="$emit('change', message)"
      />
    </template>
  </mo-drawer>
</template>

<style scoped>
.tags {
  margin: 5px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
