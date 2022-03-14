import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  @Input() avatar:string | undefined;
  @Input() isavatar:boolean |undefined;
  @Input() avatarAlt:string |undefined;
  @Input() isRipple:boolean |undefined;
  @Input() content:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
