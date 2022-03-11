import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
Title
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService:Title) { }
  pageTitle:string='';
  ngOnInit(): void {
    this.pageTitle ="about | "+this.titleService.getTitle()
    this.titleService.setTitle(this.pageTitle)
  }

}
