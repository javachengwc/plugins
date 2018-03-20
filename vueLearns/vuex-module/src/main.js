import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
