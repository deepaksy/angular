import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {
    console.log(this.getdate)
   }
  getdate:Date = new Date();
  
}
