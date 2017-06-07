import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import Userdive from 'userdive'
const _ud = Userdive()
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
  mounted: function () {
    _ud('send', 'pageview', location.href)
  },
  router
}).$mount('#app')

router.afterEach(function () {
  _ud('send', 'pageview', location.href)
})
