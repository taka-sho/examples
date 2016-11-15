import * as riot from 'riot'
import {top} from 'tags/top'
const router = this.route
const DefaultRoute = riot.router.Default
riot.router.routes([
  new DefaultRoute({tag: 'top'})
])
riot.mount(top)
