<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
const props = defineProps({
  show: Boolean, // 是否显示 Drawer
  direction: { type: String, default: 'bottom', values: ['top', 'bottom', 'left', 'right'] },
  distance: { type: [String, Number], default: '100%' },
})

const isHorizontal = computed(() => props.direction === 'left' || props.direction === 'right')
</script>

<template>
  <Transition name="drawer">
    <div v-if="show" class="drawer-mask">
      <div
        class="drawer-container"
        :style="
          isHorizontal
            ? 'width: ' + distance + '; height: 100%;'
            : 'height: ' + distance + '; width: 100%;'
        "
      >
        <div class="drawer-header">
          <slot name="header" />
        </div>

        <div class="drawer-body">
          <slot name="body" />
        </div>

        <div class="drawer-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.drawer-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.drawer-container {
  overflow: auto;
  position: absolute;
  bottom: 0;
  background-color: #f5f5f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  user-select: none;
}

.drawer-header {
  margin-top: 0;
  color: #42b983;
}

.drawer-body {
  margin: 20px 0;
}

.drawer-enter-from .drawer-container,
.drawer-leave-to .drawer-container {
  transform: translate(0, 100%);
  opacity: 1;
}

.drawer-enter-from .drawer-mask,
.drawer-leave-to .drawer-mask {
  opacity: 0;
}
</style>
