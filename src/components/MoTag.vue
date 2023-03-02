<script setup lang="ts"></script>

<template>
  <button class="tag">
    <slot />
  </button>
</template>

<style scoped>
.tag {
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 0.6em;
  font-weight: 600;
  font-family: inherit;
  background-color: #42b983;
  cursor: pointer;
  transition: border-color 0.25s;
}
.tag:hover {
  border-color: #ccc;
}
.tag:focus,
.tag:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
