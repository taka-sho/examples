import { Component, Inject } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import Userdive from 'userdive'

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  providers: [AppComponent]
})
export class AppComponent {

  _ud = Userdive()

  constructor (@Inject(Router) private router: Router) {}

  ngAfterViewInit () {
    this._ud('create', 'ldq9gyyd', 'auto')
  }

  ngAfterViewChecked () {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this._ud('send', 'pageview', location.href)
      }
    })
  }

}
