import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MemeApiService } from '../meme-api.service';
@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  memes:any[];
  constructor(private memeapi:MemeApiService,private titleService:Title) {
    this.memes = [{}];
   }
  ngOnInit(): void {
    this.titleService.setTitle("memes | Api")
    this.memeapi.getmemes().subscribe((res:any)=>{
      this.memes = res['data']['memes'];
      console.log(this.memes)
      console.log(res['data']['memes'])
    })
  }

}
