import * as riot from 'riot'
import {hello} from 'tags/hello'
riot.mount('hello')
console.log('asd')

const Route = riot.router.Route
  riot.router.routes([
    new Route({tag: 'hello'})
  ])
