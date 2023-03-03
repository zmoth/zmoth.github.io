<script setup lang="ts"></script>

<template>
  <span class="tag">
    <slot />
  </span>
</template>

<style scoped>
.tag {
  color: #f5f5f5;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.4em 1.2em;
  font-size: 0.6em;
  font-weight: 500;
  font-family: inherit;
  background-color: #42b983;
  cursor: pointer;
  transition: border-color 0.25s;
}
.tag:hover {
  border-color: #f5f5f5;
}
.tag:focus,
.tag:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
