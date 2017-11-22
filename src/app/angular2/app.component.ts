import { Component, Inject } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
declare var ud: USERDIVETracker.USERDIVEObject

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  providers: [AppComponent]
})
export class AppComponent {
  constructor (@Inject(Router) private router: Router) {}

  ngAfterViewInit () {
    _ud('create', 'ldq9gyyd', 'auto')
  }

  ngAfterViewChecked () {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        ud('changeVirtualUrl', location.href)
      }
    })
  }

}
