// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  exclude: [
    'node_modules',
    '.git',
    '.github',
    '.husky',
    '.vscode',
    'build',
    'dist',
    'mock',
    'public',
    './stats.html',
  ],
  presets: [presetUno(), presetAttributify()],
  theme: {
    colors: {
      light: 'var(--light-color)',
      light_soft: 'var(--light-color-soft)',
      light_mute: 'var(--light-color-mute)',
      dark: 'var(--dark-color)',
      dark_soft: 'var(--dark-color-soft)',
      dark_mute: 'var(--dark-color-mute)',
      indigo: 'var(--indigo-color)',
      divider_light_1: 'var(--divider-color-light-1)',
      divider_light_2: 'var(--divider-color-light-2)',
      divider_dark_1: 'var(--divider-color-dark-1)',
      divider_dark_2: 'var(--divider-color-dark-2)',
      text_light_1: 'var(--text-color-light-1)',
      text_light_2: 'var(--text-color-light-2)',
      text_dark_1: 'var(--text-color-dark-1)',
      text_dark_2: 'var(--text-color-dark-2)',
      primary: 'var(--primary-color)',
      primary_hover: 'var(--primary-color-hover)',
      primary_pressed: 'var(--primary-color-pressed)',
      primary_active: 'var(--primary-color-active)',
    },
  },
})
