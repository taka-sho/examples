import * as riot from 'riot'
import {top} from 'tags/top'
riot.mount(top)

const DefaultRoute = riot.router.Default
riot.router.routes([
  new DefaultRoute({tag: 'top'})
])
