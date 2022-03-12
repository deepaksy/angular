import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static projectTitle:string="Angular";
  public  siteTitle:string=AppComponent.projectTitle;
  currentTheme:string; // Theming
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.themeServices.setinitialTheme();
      this.currentTheme=(this.themeServices.getcurrentTheme()||"");
      console.log("Oninit called")
      
    }
constructor(private breakpointObserver: BreakpointObserver,private themeServices:ThemeService) {
  this.currentTheme=(this.themeServices.getcurrentTheme()||"");
  console.log("Constructor called")

}
themeToggle(){
  this.themeServices.handleTheme();
  this.currentTheme=(this.themeServices.getcurrentTheme()||"");
  // console.log(this.currentTheme)
}
}
