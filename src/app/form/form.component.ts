import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private titleService:Title) { this.setinitialTheme()
  this.titleService.setTitle('Student form')
  }

  currentTheme:any;
  ngOnInit(): void {
    this.currentTheme = document.documentElement.getAttribute("data-theme");
  }

  StudentForm = new FormGroup({  //Reactive form components
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
    
  })

  Onsubmit(){
    console.log(this.StudentForm.value);
  }

  handleTheme(){

    this.currentTheme =document.documentElement.getAttribute("data-theme");
    if(this.currentTheme=="dark"){
      
      document.documentElement.setAttribute("data-theme","light");
      console.log("Themetoggle: light")
      localStorage.setItem("data-theme","light");
      }
      else{
        document.documentElement.setAttribute("data-theme","dark");
      console.log("Themetoggle: dark")
      localStorage.setItem("data-theme","dark");
      }
  }

  setinitialTheme(){
    let gettheme:any =localStorage.getItem("data-theme");
    document.documentElement.setAttribute("data-theme",gettheme);
	console.log("initial theme called")
  console.log(gettheme)
  }

}
