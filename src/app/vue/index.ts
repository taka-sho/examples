import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import userdive from 'userdive'
const _ud = userdive()
Vue.use(VueRouter)

const sample1 = { template: '<router-link to="sample2">Sample2</router-link>' }
const sample2 = { template: '<router-link to="sample1">Sample1</router-link>' }

const routes = [
  {path: '/sample1', name: 'sample1', component: sample1},
  {path: '/sample2', name: 'sample2', component: sample2},
  {path: '/**', redirect: 'sample1'}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  mounted: function () {
    _ud('create', 'ldq9gyyd', 'auto')
  },
  router
}).$mount('#app')

router.afterEach(function () {
  _ud('send', 'pageview', location.href)
})
