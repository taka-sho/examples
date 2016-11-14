import * as Riot from 'riot'
import * as {route} from 'riot-route'

const Route = Riot.router.Route

Riot.route.routes({
  new Route({tag: 'hello'})
})
