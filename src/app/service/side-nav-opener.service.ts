import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavOpenerService {

  constructor() { }

  public $Open_State = new BehaviorSubject<boolean>(false);

  sideNavOpener() {
    this.$Open_State.next(!this.$Open_State.getValue())
    if (this.$Open_State.getValue()) {
      document.body.classList.add('NotScroll')
    } else {
      document.body.classList.remove('NotScroll')
    }
  }
}
