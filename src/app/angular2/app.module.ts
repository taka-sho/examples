import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import Tracker from '../ud'

import { routing } from './app.routing'
import { AppComponent } from './app.component'
import { TopComponent } from './components/top.component'
import { AboutComponent } from './components/about.component'

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    TopComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
