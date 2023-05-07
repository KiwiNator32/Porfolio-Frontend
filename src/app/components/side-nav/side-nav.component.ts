import { Component } from '@angular/core';
import { SideNavOpenerService } from 'src/app/service/side-nav-opener.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  nav_state:string = "closed";

  hidden_background:boolean = false;

  constructor(public sideNavSvc:SideNavOpenerService) {
    this.sideNavSvc.$Open_State.subscribe((Res) => {
      if (Res) {
          this.nav_state = "open"
        this.hidden_background = true
      } else {
        this.nav_state = "closed"
          this.hidden_background = false
      }
    })
  }

}
