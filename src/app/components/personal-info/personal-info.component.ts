import { Component } from '@angular/core';
import { AdminManagerService } from 'src/app/service/admin-manager.service';
import { ApiService } from 'src/app/service/api/api.service';
import { ListService } from 'src/app/service/list.service';

export interface IPersonalInfo {
  id:number;
  image_url:string;
  title:string;
  text:string;
}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {

  AdminStatus: boolean;
  personalinfo:IPersonalInfo[] = []

  constructor ( public listServiceSvc:ListService, public adminManagerSvc:AdminManagerService, private apiSvc:ApiService ) {
    this.AdminStatus = adminManagerSvc.GetAdminStatus()

    this.apiSvc.personalInfo().subscribe((res)=>{
      this.personalinfo = res
    })


  }




}
