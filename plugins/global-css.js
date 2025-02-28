import Vue from 'vue'

// This plugin ensures CSS is loaded properly
export default () => {
  // This is a no-op plugin that ensures the webpack CSS loader processes our CSS
  Vue.prototype.$ensureCSS = true
}