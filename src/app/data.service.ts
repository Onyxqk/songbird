import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

const BASE_REST_URL = "https://98zf3e97uc.execute-api.us-east-1.amazonaws.com/connectToSpotifyAPI"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  // takes user input as parameter, passes it to the connectToSpotifyAPI REST endpoint as a query parameter
  // returns the data retrieved from HTTP GET request made to endpoint
  public getData(userInput: string) {
    let queryParams = { "query": userInput }
    return this._http.get(BASE_REST_URL, { params: queryParams })
  }
}
