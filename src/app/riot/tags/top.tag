<top-content>
  <a href="#about">about</a>
  <script type="text/typescript">
    const defaultDom: string = riot.router.defaultRoute;
    const aboutDom: string = riot.router.Route;
    riot.router.routes([
      new defaultDom({"tag", "top"}),
      new aboutDom({"tag", "about"})
    ]);
    riot.router.start();
  </script>
</top-content>
