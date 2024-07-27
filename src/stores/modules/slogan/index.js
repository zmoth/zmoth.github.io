import { defineStore } from 'pinia'
import { lStorage } from '@/utils'

export const useSloganStore = defineStore('slogan', {
  state() {
    return {
      index: 0,
      content: lStorage.get('slogan') || ['织蛾', 'Moth', 'が'],
    }
  },
  getters: {
    length() {
      return this.content.length
    },
    currentSlogan() {
      return this.content[this.index]
    },
  },
  actions: {
    updateIndex() {
      this.index = (this.index + 1) % this.length
    },
    updateSloganContent(newSlogan) {
      this.content = newSlogan
      lStorage.set('slogan', this.content)
    },
    updateSlogan(index, newSlogan) {
      this.content[index] = newSlogan
      lStorage.set('slogan', this.content)
    },
  },
})

let lastUpdateTimestamp = 0 // 记录最后一次更新的时间戳

function updateByTimestamp() {
  const now = Date.parse(new Date()) / 1000
  if ((now - lastUpdateTimestamp) % 3 === 0 && now !== lastUpdateTimestamp) {
    useSloganStore().updateIndex()
    lastUpdateTimestamp = now
  }
}

setInterval(updateByTimestamp, 100)
