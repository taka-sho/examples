import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { TopComponent } from './components/top.component'
import { AboutComponent } from './components/about.component'

const routes: Routes = [
  {
    path: '',
    component: TopComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true})
