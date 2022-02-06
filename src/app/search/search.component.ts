import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults: object = {}
  searchResultsString: string = ""

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

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
