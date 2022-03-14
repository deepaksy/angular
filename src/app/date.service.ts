import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {
    console.log(this.getdate)
   }
  getdate:Date = new Date();

  getDate(day:number,month:number,year:number):Date{
    return new Date(year,month,day);
  }

  getcurrentdate():Date{
    return new Date();
  }
  
}
