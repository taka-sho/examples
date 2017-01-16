import { Component, Inject } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import Tracker from '../ud'

@Component({
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  providers: [AppComponent]
})
export class AppComponent {

  constructor(@Inject(Router) private router: Router) {}

  ngAfterViewChecked() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const tracker = new Tracker()
        tracker.changeVirtualUrl()
      }
    })
  }
}
