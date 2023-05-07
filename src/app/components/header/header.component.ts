import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { SideNavOpenerService } from 'src/app/service/side-nav-opener.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public sideNavSvc:SideNavOpenerService, public router:Router) {}

 nav_class:string = "nav";

 @HostListener('window:scroll')
 Scroll() {
  if (window.pageYOffset > 55) {
    this.nav_class = "nav_active";
  } else {
    this.nav_class = "nav";
  }
 }

 onClick() {
  this.sideNavSvc.sideNavOpener()

  if (this.sideNavSvc.$Open_State.getValue()) {
    this.nav_class = "nav_active";
  } else {
    this.Scroll()
  }

 }

}
