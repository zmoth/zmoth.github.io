<script setup lang="ts">
defineProps<{ slogen: string }>()
</script>

<template>
  <div class="slogen-layout">
    {{ slogen }}
  </div>
</template>

<style scoped>
.slogen-layout {
  color: #213547;
  font-size: 4.2em;
  line-height: 1.1;
  font-weight: 700;
  word-break: break-all;
  white-space: pre-line;
  user-select: none;
}
</style>
