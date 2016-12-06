import '../../../tags/top'
import '../../../tags/about'
const route = require('riot-route')

riot.mount('*')
const routeTag = 'top'
route('/', function() {
  riot.mount(routeTag, 'top')
})
route('/about', function() {
  riot.mount(routeTag, 'about')
})
route.start(true)
