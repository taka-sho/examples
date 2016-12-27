import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import Tracker from '../ud'
const tracker = new Tracker()
Vue.use(VueRouter)

const top = { template: '<router-link to="about">about</router-link>' }
const about = { template: '<router-link to="/">top</router-link>' }

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
