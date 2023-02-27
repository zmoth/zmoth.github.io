<script setup lang="ts">
import { ref } from 'vue'
import config from '../../package.json'

const drawer = ref(false)
const message = ref('Moth\n\n织蛾')

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()
</script>

<template>
  <el-drawer v-model="drawer" :with-header="true" :show-close="true" direction="btt" size="100%">
    <template #header>
      <h2>Settings</h2>
    </template>
    <template #default>
      <el-tag class="ml-2" effect="dark"> {{ config.version }}</el-tag>

      <h3>Custom slogan</h3>
      <el-input
        v-model="message"
        :autosize="{ minRows: 5, maxRows: 10 }"
        type="textarea"
        placeholder="Please input"
        @change="$emit('change', message)"
      />
    </template>
  </el-drawer>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
