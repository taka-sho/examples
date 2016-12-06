
declare function require(string): any;
const riot = require('riot')
const route = require('riot-route')
const routeTag = 'top'
route('/', function() {
  riot.mount(routeTag, 'top')
})
route('/about', function() {
  riot.mount(routeTag, 'about')
})
route.start(true)
