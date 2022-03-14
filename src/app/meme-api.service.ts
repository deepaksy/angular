import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MemeApiService {

  constructor(private http:HttpClient) { }

  getmemes(){
    return this.http.get('https://api.imgflip.com/get_memes');
  }
}
