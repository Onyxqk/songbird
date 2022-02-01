import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input() results:any

  Object = Object;

  spotifyPlayerURL = "https://open.spotify.com/embed/track/"
  
  constructor() { }

}
