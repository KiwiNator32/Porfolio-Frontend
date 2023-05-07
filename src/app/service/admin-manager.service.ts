import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminManagerService {

  constructor() { }

  admin_status:boolean = true;

  GetAdminStatus() {
    return this.admin_status
  }
}
