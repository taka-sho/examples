import { Component, Inject } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import Userdive from 'userdive'

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  providers: [AppComponent]
})
export class AppComponent {

  constructor (@Inject(Router) private router: Router) {}

  ngAfterViewChecked () {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const _ud = Userdive()
        _ud('send', 'pageview', location.href)
      }
    })
  }
}
