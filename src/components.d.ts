declare module 'vue' {
  export interface GlobalComponents {
    AppImage: typeof import('./components/app-image/app-image.vue')['default']
  }
}

export {}
