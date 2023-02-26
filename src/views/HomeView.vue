<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'

import '../assets/main.css'

const props = defineProps<{ text: string }>()
</script>

<template>
  <HelloWorld :msg="props.text" />
</template>
