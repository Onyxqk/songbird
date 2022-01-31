import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_REST_URL = "https://98zf3e97uc.execute-api.us-east-1.amazonaws.com/connectToSpotifyAPI"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  public getData(userInput:string ) {
    return this._http.get(BASE_REST_URL + "?" + userInput)
  }
}
