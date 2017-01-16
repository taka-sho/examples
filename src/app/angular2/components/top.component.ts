import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  template: `
    <a routerLink="about">About</a>
  `,
  providers: [RouterModule]
})
export class TopComponent {}
