<script setup>
import { ref, reactive } from 'vue'
import config from '@/../package.json'
import {
  NDrawer,
  NDrawerContent,
  NTag,
  NDynamicInput,
  NInput,
  NButton,
  NTabs,
  NTabPane,
} from 'naive-ui'
import { useSloganStore } from '@/stores'
import { useBreakpoints } from '@vueuse/core'
import AppProvider from '@/components/common/AppProvider.vue'

const show = ref(false)

const sloganStore = useSloganStore()

// 移动端适配
const breakpointsEnum = {
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
}
const breakpoints = reactive(useBreakpoints(breakpointsEnum))
const isMobile = breakpoints.smaller('sm')
const isPad = breakpoints.between('sm', 'md')

function toReleaseUrl() {
  window.open('https://github.com/zmoth/zmoth.github.io/releases', '_blank')
}
function toGithubUrl() {
  window.open('https://github.com/zmoth', '_blank')
}
function toLicenseUrl() {
  window.open('https://github.com/zmoth/zmoth.github.io?tab=License-1-ov-file#readme', '_blank')
}
</script>

<template>
  <AppProvider bg-light_soft dark:bg-dark text-text_light_1 dark:text-text_dark_2>
    <div
      class="no-scrollbar"
      w-full
      h-screen
      flex
      justify-center
      items-center
      overflow-y-hidden
      overflow-y-scroll
      whitespace-break-spaces
    >
      <Transition name="fade" mode="out-in" appear>
        <div
          @click="show = true"
          :key="sloganStore.currentSlogan"
          text-7xl
          font-bold
          cursor-pointer
          select-none
          break-all
          p-16
        >
          {{ sloganStore.currentSlogan }}
        </div>
      </Transition>
    </div>

    <n-drawer
      v-model:show="show"
      :placement="isMobile || isPad ? 'bottom' : 'right'"
      :width="500"
      :height="'full'"
      h-full
      bg-light_soft
      dark:bg-dark
    >
      <n-drawer-content :native-scrollbar="false">
        <template #header>设置</template>

        <n-tabs type="segment" animated>
          <n-tab-pane name="chap1" tab="Slogen">
            <n-dynamic-input
              v-model:value="sloganStore.content"
              :on-update:value="sloganStore.updateSloganContent"
              show-sort-button
              :min="1"
              p-1
            >
              <template #default="slogen">
                <n-input
                  v-model:value="slogen.value"
                  :on-update:value="
                    (value) => {
                      slogen.value = value
                      sloganStore.updateSlogan(slogen.index, slogen.value)
                    }
                  "
                  :autofocus="false"
                  type="textarea"
                  placeholder="想点骚话"
                  rounded-lg
                />
              </template>
            </n-dynamic-input>
          </n-tab-pane>
          <n-tab-pane name="chap2" tab="关于">
            <div flex justify-around p-3>
              <n-tag
                round
                :bordered="false"
                @click="toGithubUrl"
                cursor-pointer
                color-primary
                bg-primary_active
              >
                {{ config.author }}
              </n-tag>
              <n-tag
                round
                :bordered="false"
                @click="toReleaseUrl"
                cursor-pointer
                color-primary
                bg-primary_active
              >
                {{ config.version }}
              </n-tag>
              <n-tag
                round
                :bordered="false"
                @click="toLicenseUrl"
                cursor-pointer
                color-primary
                bg-primary_active
              >
                {{ config.license }}
              </n-tag>
            </div>
          </n-tab-pane>
        </n-tabs>

        <template #footer>
          <n-button round @click="show = !show">试试</n-button>
        </template>
      </n-drawer-content>
    </n-drawer>
  </AppProvider>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
