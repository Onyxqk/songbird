import { Component } from '@angular/core'
import { DataService } from '../data.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchResults: object = {}
  searchResultsString: string = ""

  constructor(private dataService: DataService) { }

  // passes user input to data service and gets data, stores search results that are returned, and converts to string
  search(userInput: string) {
    if (userInput.length >= 1) {
      this.dataService.getData(userInput)
        .subscribe(data => {
          this.searchResults = data
        })
      this.searchResultsString = JSON.stringify(this.searchResults)
    }
  }

}
