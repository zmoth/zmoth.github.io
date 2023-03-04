<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps({
  show: Boolean, // 是否显示 Drawer
  direction: { type: String, default: 'bottom', values: ['top', 'bottom', 'left', 'right'] },
  distance: { type: [String, Number], default: '100%' },
  withHeader: { type: Boolean, default: true },
})

const emit = defineEmits(['close'])

const isHorizontal = computed(() => props.direction === 'left' || props.direction === 'right')

function handleMaskClick() {
  emit('close')
}

var move = 0
function handeContainerTouchStart(e: TouchEvent) {
  move = e.changedTouches[0].pageY
}

function handeContainerTouchMove(e: TouchEvent) {
  let moveEndY = e.changedTouches[0].pageY
  let Y = moveEndY - move //如果值为正,则代表手指下滑,反则则为上滑,为0则表示点击
  if (Y > 0) {
    // emit('close')
  }
}
</script>

<template>
  <Transition name="drawer">
    <div v-if="show" class="drawer-layout">
      <div
        class="drawer-container"
        @touchstart="handeContainerTouchStart"
        @touchmove="handeContainerTouchMove"
      >
        <header v-if="withHeader" class="drawer-header">
          <slot name="header" />
        </header>

        <div class="drawer-body">
          <slot name="body" />
        </div>

        <div class="drawer-footer">
          <slot name="footer" />
        </div>
      </div>
      <div class="drawer-mask" @click="handleMaskClick"></div>
    </div>
  </Transition>
</template>

<style>
.drawer-layout {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
  display: flex;
  transition: opacity 0.3s ease;
}
.drawer-mask {
  position: fixed;
  z-index: 818;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.drawer-container {
  z-index: 9998;
  overflow: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
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

@media (min-width: 1024px) {
  .drawer-container {
    bottom: unset;
    right: 0;
    width: 37%;
    height: 100%;
  }

  .drawer-enter-from .drawer-container,
  .drawer-leave-to .drawer-container {
    transform: translate(100%, 0);
  }
}
</style>
