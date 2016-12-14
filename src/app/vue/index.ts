import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import Tracker from '../ud'
const tracker = new Tracker()
tracker.changeVirtualUrl()

Vue.use(VueRouter)

const top = { template: '<a href="#/about">about</a>' }
const about = { template: '<a href="#/">top</a>' }

const routes = [
  {path: '/', component: top},
  {path: '/about', component: about}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')

router.afterEach(function () {
  tracker.changeVirtualUrl()
})
