import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import Tracker from '../ud'
const tracker = new Tracker()
Vue.use(VueRouter)

const top = { template: '<router-link to="about">About</router-link>' }
const about = { template: '<router-link to="/">Top</router-link>' }

const routes = [
  {path: '/', name: 'top', component: top},
  {path: '/about', name: 'about', component: about}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  mounted: function () {
    tracker.changeVirtualUrl()
  },
  updated: function () {
    tracker.changeVirtualUrl()
  },
  router
}).$mount('#app')
