<top>
  <a href="#about">about</a>
  <script type="text/javascript" src="../../../../node_modules/riot-route/dist/route.min.js"></script>
  <script type="text/typescript">
    const riot = import('riot');
    const Route = riot.router.Route;
    const DefaultRoute = riot.router.DefaultRoute;
  riot.router.routes([
      new Route({tag: 'top'});
      new DefaultRoute({tag: 'about'});
  ]);
  </script>
</top>
