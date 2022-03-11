import { Component } from '@angular/core';
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
  public siteTitle:string="StudentPortal";
  currentTheme:string; // Theming
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver,private themeServices:ThemeService) {
  this.themeServices.setinitialTheme();
  this.currentTheme=(this.themeServices.getcurrentTheme()||"");

}
themeToggle(){
  this.themeServices.handleTheme();
  this.currentTheme=(this.themeServices.getcurrentTheme()||"");
  console.log(this.currentTheme)
}
}
