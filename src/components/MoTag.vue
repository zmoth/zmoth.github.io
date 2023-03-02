<script setup lang="ts"></script>

<template>
  <button class="tag">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 0.5em;
  font-weight: 600;
  font-family: inherit;
  background-color: #e0e3f3;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
