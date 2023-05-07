import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminManagerService } from 'src/app/service/admin-manager.service';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss']
})
export class PopupFormComponent {
  AdminStatus:boolean = false
  OpenStatus:boolean = false
  form:any;

  id:number = 52;


  constructor ( AdminManagerSvc:AdminManagerService, private http:HttpClient , private formBuilder: FormBuilder) {
    this.AdminStatus = AdminManagerSvc.GetAdminStatus()

    this.form = this.formBuilder.group({
      id: [this.id, Validators.required],
      title: ["", Validators.required],
      image_url: ["", Validators.required],
      text: ["", Validators.required, Validators.maxLength(255)]
    })
  }


  onCancel() {
    this.OpenStatus = false

    if (this.OpenStatus) {
      document.body.classList.add('NotScroll')
    } else {
      document.body.classList.remove('NotScroll')
    }
  }

  onSubmit(params: string) {
    const url = "http://localhost:8080/"
    let formvalue = this.form.value

    this.http.post<any>(url + params, formvalue).subscribe((response: any) =>{
      console.log(response)
    })

    this.onCancel()
  }

  ChangeState() {
    this.OpenStatus = !this.OpenStatus

    if (this.OpenStatus) {
      document.body.classList.add('NotScroll')
    } else {
      document.body.classList.remove('NotScroll')
    }
  }



}
