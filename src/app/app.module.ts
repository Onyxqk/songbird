import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SearchComponent } from './search/search.component'
import { HttpClientModule } from '@angular/common/http'
import { ResultsComponent } from './results/results.component'
import { TrackLengthPipe } from './track-length.pipe'
import { SafeUrlPipe } from './safe-url.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    TrackLengthPipe,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
