import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import Tracker from '../ud'
const tracker = new Tracker()
tracker.changeVirtualUrl()

Vue.use(VueRouter)

const top = { template: '<div>これはtop</div>' }
const about = { template: '<div>これはabout</div>' }

const routes = [
  {path: '/', name: 'top', component: top},
  {path: '/about', name: 'about', component: about}
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
