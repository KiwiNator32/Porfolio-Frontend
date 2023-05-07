import { Component, Input } from '@angular/core';
import { AdminManagerService } from 'src/app/service/admin-manager.service';

@Component({
  selector: 'app-ul-list-object',
  templateUrl: './ul-list-object.component.html',
  styleUrls: ['./ul-list-object.component.scss']
})
export class UlListObjectComponent {

  @Input()  id:number = 0;
  @Input() title = "Title";
  @Input() text = "lorem ipsum";
  AdminStatus:boolean;

  constructor(public adminManagerSvc:AdminManagerService) {
    this.AdminStatus = adminManagerSvc.GetAdminStatus()
  }
}
