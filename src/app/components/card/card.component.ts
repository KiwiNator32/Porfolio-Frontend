import { Component, Input } from '@angular/core';
import { AdminManagerService } from 'src/app/service/admin-manager.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()  id:number = 0;
  @Input()  bg_color:string = "#cccccc"
  @Input()  bg_title:string = "titulo"
  @Input()  img_color:string = "#ffffff"
  @Input()  img_dir:string = "assets/placeholder.png"
  @Input()  content_text:string = "text"
  @Input()  info_link:string = "https://www.google.com"
  AdminStatus: boolean;

  constructor(public adminManagerSvc:AdminManagerService) {
    this.AdminStatus = adminManagerSvc.GetAdminStatus()
  }


}
