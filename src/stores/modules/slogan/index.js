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
      lStorage.set('slogan', newSlogan)
    },
  },
})

setInterval(() => {
  useSloganStore().updateIndex()
}, 3000)
