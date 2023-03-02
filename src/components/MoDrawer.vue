<script setup lang="ts">
const props = defineProps({
  show: Boolean,
})
</script>

<template>
  <Transition name="drawer">
    <div v-if="show" class="drawer-mask">
      <div class="drawer-container">
        <div class="drawer-header">
          <slot name="header">default header</slot>
        </div>

        <div class="drawer-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')">OK</button>
          </slot>
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.drawer-container {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  margin: auto;
  /* padding: 20px 30px; */
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.drawer-header h3 {
  margin-top: 0;
  color: #42b983;
}

.drawer-body {
  margin: 20px 0;
}

.drawer-default-button {
  float: right;
}

/*
 * 对于 transition="drawer" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.drawer-enter-from .drawer-container,
.drawer-leave-to .drawer-container {
  transform: translateY(100%);
  opacity: 1;
}

.drawer-enter-from .drawer-mask,
.drawer-leave-to .drawer-mask {
  /* -webkit-transform: scale(1.1);
  transform: scale(1.1); */
  opacity: 0;
}
</style>
