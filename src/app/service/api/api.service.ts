import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';
import { IPersonalInfo } from 'src/app/components/personal-info/personal-info.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi: string = "http://localhost:8080/api/"

  private get getAuthHeader() {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }),
    };
  }

  constructor(private http: HttpClient) { }

  // personalinfo:{id:number, image_url:string, title:string, text:string}[] = this.listServiceSvc.GetRequest('personal/get').subscribe(
  //   (response: any) => { this.personalinfo = response }
  //   )

  getList() {
    return this.http
      .get<any>(`${this.urlApi}list/get`)
      .pipe(share());
  }

  personalInfo() {
    return this.http
      .get<IPersonalInfo[]>(`${this.urlApi}personal/get`, this.getAuthHeader)
      .pipe(share());
  }

}
