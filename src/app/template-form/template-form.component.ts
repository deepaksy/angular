import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public name:string="";
  public age:number=0;
  public address:string="";
  constructor(private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Template forms | Angular')
  }

  getFormData(data:NgForm){
    console.log(data.value)

  }

}
