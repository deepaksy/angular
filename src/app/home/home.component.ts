import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import {CardData,SiteInfo,anoterdtat} from '../data/cardData';
import { DateService } from '../date.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  siteinfo=SiteInfo;
  greet="none";
  carddata=CardData;
  other = anoterdtat;
  constructor(private titleService:Title,public date:DateService) { 
    this.titleService.setTitle(AppComponent.projectTitle +' - Home');
  }

  ngOnInit(): void {
  }
  handleGreet =()=>{ this.greet="block"}

}
