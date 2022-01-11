import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userInput = "Taylor Swift"
  searchResults = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  search() {
    this.dataService.getData(this.userInput)
    .subscribe(data => {
      this.searchResults.push()
    })
    console.log(this.searchResults)
  }

}
