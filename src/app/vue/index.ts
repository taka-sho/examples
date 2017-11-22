import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
declare var ud: USERDIVETracker.USERDIVEObject

const sample1 = { template: '<router-link to="sample2">Sample2</router-link>' }
const sample2 = { template: '<router-link to="sample1">Sample1</router-link>' }

const routes = [
  { path: '/sample1', name: 'sample1', component: sample1 },
  { path: '/sample2', name: 'sample2', component: sample2 },
  { path: '/**', redirect: 'sample1' }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  mounted: function () {
    ud('changeVirtualUrl', location.href)
  },
  updated: function () {
    ud('changeVirtualUrl', location.href)
  },
  router
}).$mount('#app')
