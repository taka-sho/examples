import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import Tracker from '../ud'
const tracker = new Tracker()
<<<<<<< HEAD

Vue.use(VueRouter)

const top = { template: '<a href="#/about">about</a>' }
const about = { template: '<a href="#/">top</a>' }

const routes = [
  {path: '/', component: top},
  {path: '/about', component: about}
=======
tracker.changeVirtualUrl()

Vue.use(VueRouter)

const top = { template: '<div>これはtop</div>' }
const about = { template: '<div>これはabout</div>' }

const routes = [
  {path: '/', name: 'top', component: top},
  {path: '/about', name: 'about', component: about}
>>>>>>> 56dbacb81204f6d4f489f961933124372309d70a
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
