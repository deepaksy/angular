import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme:any;
  constructor() {this.currentTheme = document.documentElement.getAttribute("data-theme"); }

  handleTheme(){

    this.currentTheme =document.documentElement.getAttribute("data-theme");
    if(this.currentTheme=="dark"){
      
      document.documentElement.setAttribute("data-theme","light");
      // console.log("Themetoggle: light")
      localStorage.setItem("data-theme","light");
      }
      else{
        document.documentElement.setAttribute("data-theme","dark");
      // console.log("Themetoggle: dark")
      localStorage.setItem("data-theme","dark");
      }
  }

  setinitialTheme(){
    let gettheme:any =localStorage.getItem("data-theme");
    document.documentElement.setAttribute("data-theme",gettheme);
  console.log("InitialTheme:"+gettheme)
  }

  getcurrentTheme(){
    return localStorage.getItem("data-theme");
  }

  setTheme(theme:string){
    document.documentElement.setAttribute("data-theme",theme);
    localStorage.setItem("data-theme",theme);
  }
}
