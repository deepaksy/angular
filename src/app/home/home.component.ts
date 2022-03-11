import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {CardData,SiteInfo,anoterdtat} from '../data/cardData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  siteinfo=SiteInfo;
  carddata=CardData;
  other = anoterdtat;
  constructor(private titleService:Title) { 
    this.titleService.setTitle('Student Portal');
  }

  ngOnInit(): void {
  }

}
