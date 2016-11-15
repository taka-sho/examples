import * as riot from 'riot'
import {top} from 'tags/top'
import {about} from 'tags/about'
riot.mount('top')

const Route = riot.router.Route
const DefaultRoute = riot.router.Default
riot.router.routes([
  new Route({tag: 'about'}),
  new DefaultRoute({tag: 'top'})
])
