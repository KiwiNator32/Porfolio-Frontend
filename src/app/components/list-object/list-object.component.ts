import { Component, Input } from '@angular/core';
import { AdminManagerService } from 'src/app/service/admin-manager.service';

@Component({
  selector: 'app-list-object',
  templateUrl: './list-object.component.html',
  styleUrls: ['./list-object.component.scss']
})
export class ListObjectComponent {

  @Input()  id:number = 0;
  @Input() color:string = "gray";
  @Input() title:string = "Title";
  @Input() text:string = "lorem ipsum";
  AdminStatus:boolean;

  constructor(public adminManagerSvc:AdminManagerService) {
    this.AdminStatus = adminManagerSvc.GetAdminStatus()
  }

}
