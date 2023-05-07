import { Component, OnInit } from '@angular/core';
import { IPersonalInfo } from 'src/app/components/personal-info/personal-info.component';
import { AdminManagerService } from 'src/app/service/admin-manager.service';
import { ApiService } from 'src/app/service/api/api.service';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  PersonalInfoInput: { type: string, name: string, placeholder: string }[] = [
    {
      type: "title",
      name: "",
      placeholder: ""
    },
    {
      type: "image_url",
      name: "",
      placeholder: "Url Imagen"
    }
  ]

  AdminStatus: boolean;

  personalinfo: IPersonalInfo[] = []



  constructor(public listServiceSvc: ListService, public adminManagerSvc: AdminManagerService, private apiSvc:ApiService) {
    this.AdminStatus = adminManagerSvc.GetAdminStatus()

    this.apiSvc.personalInfo().subscribe((res) => {
      this.personalinfo = res
    })

  }
  ngOnInit(): void { }

}
