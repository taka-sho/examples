/// <reference path="../ud.d.ts" />
import './tags/top'
import './tags/about'
import * as riot from 'riot'
import route from 'riot-route'

const routeTag = 'top'
declare var ud: USERDIVETracker.USERDIVEObject

function setTag (setTo: string, tagFileName: string) {
  riot.mount(setTo, tagFileName)
  ud('changeVirtualUrl', location.href)
}

route('/', function () {
  setTag(routeTag, 'top')
})
route('/about', function () {
  setTag(routeTag, 'about')
})

route.start(true)
