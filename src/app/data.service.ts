import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_ITUNES_REST_URL = "https://itunes.apple.com/search?term="
const MUSIC_PARAMETER = "&media=music"
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  public getData(userInput?:string ) {
    return this._http.get(BASE_ITUNES_REST_URL + userInput + MUSIC_PARAMETER)
  }
}
