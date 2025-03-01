// plugins/vue-motion.js
import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MotionPlugin, {
    directives: {
      'slide-visible-once-bottom': {
        initial: {
          opacity: 0,
          y: 100
        },
        visible: {
          opacity: 1,
          y: 0
        },
        delay: 500
      }
    }
  })
})