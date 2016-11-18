<top-content>
  <a href="#about">about</a>
  <script type="text/typescript">
    declare function require(x: string): any;
    const riot: any = require('riot');
    const riotRoute: any = require('riot-route');
    const defaultPage: string = riot.riotRoute.defaultRoute;
    riotRoute.base('/');
    riotRoute(function (param) {
      riot.mount('route', param);
    })
  </script>
</top-content>
