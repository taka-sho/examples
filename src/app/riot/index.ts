import * as riot from 'riot'
import {hello} from 'tags/hello'
riot.mount('hello')

const Route = riot.router.Route
const DefaultRoute = riot.router.Default
riot.router.routes([
  new Route({tag: 'hello'}),
  new DefaultRoute({tag: 'top'})
])
