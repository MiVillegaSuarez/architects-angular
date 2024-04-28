import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  private textUrl = 'assets/texts/texts.json'
  
  constructor(private http:HttpClient) { }
  
  getTexts() {
    return this.http.get(this.textUrl)
  }
}
