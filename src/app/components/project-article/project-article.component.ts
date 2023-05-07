import { Component, Input } from '@angular/core';
import { AdminManagerService } from 'src/app/service/admin-manager.service';

@Component({
  selector: 'app-project-article',
  templateUrl: './project-article.component.html',
  styleUrls: ['./project-article.component.scss']
})
export class ProjectArticleComponent {

    @Input()  id:number = 0;
    @Input() color:string = "gray";
    @Input() title:string = "Title";
    @Input() text:string = "lorem ipsum";
    @Input() link:string = "";
    AdminStatus:boolean;

    constructor(public adminManagerSvc:AdminManagerService) {
      this.AdminStatus = adminManagerSvc.GetAdminStatus()
    }

  }
