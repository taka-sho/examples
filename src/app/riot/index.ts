import '../../../tags/top'
import '../../../tags/about'
import * as riot from 'riot'
import Tracker from '../ud'
const route = require('riot-route')

namespace riotRoute {
  const routeTag = 'top'
  const tracker = new Tracker()

  function setTag (setTagName: string, tagFileName: string) {
    riot.mount(setTagName, tagFileName)
    tracker.changeVirtualUrl()
  }

  route('/', function() {
    setTag(routeTag, 'top')
  })
  route('/about', function() {
    setTag(routeTag, 'about')
  })

  route.start(true)
}
