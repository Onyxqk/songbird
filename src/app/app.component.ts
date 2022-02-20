import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'songbird'

  // unit test framework can't handle full page reloads, so excluding this function from code coverage
  /* istanbul ignore next */
  reload() {
    window.location.reload()
  }
}
