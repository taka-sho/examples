import '../../../tags/top'
import '../../../tags/about'
import * as riot from 'riot'
import Tracker from '../ud'
import route from 'riot-route'

const routeTag = 'top'
const tracker = new Tracker()

function setTag (setTo: string, tagFileName: string) {
  riot.mount(setTo, tagFileName)
  tracker.changeVirtualUrl()
}

route('/', function () {
  setTag(routeTag, 'top')
})
route('/about', function () {
  setTag(routeTag, 'about')
})

route.start(true)
