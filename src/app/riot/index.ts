/// <reference path="../ud.d.ts" />
import './tags/sample1'
import './tags/sample2'
import * as riot from 'riot'
import route from 'riot-route'

const routeTag = 'sample'
declare var ud: USERDIVETracker.USERDIVEObject

function setTag (setTo: string, tagFileName: string) {
  riot.mount(setTo, tagFileName)
  ud('changeVirtualUrl', location.href)
}

route(function () {
  route('sample1')
})

route('sample1', function () {
  setTag(routeTag, 'sample1')
})

route('sample2', function () {
  setTag(routeTag, 'sample2')
})

route.start(true)
