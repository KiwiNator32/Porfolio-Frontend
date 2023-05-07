import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {

  }
  url: string = "http://localhost:8080/"

  list: { id: number, color: string, title: string, text: string }[] = this.GetRequest('list/get').subscribe(
    (response: any) => { this.list = response }
  )

  cardlist: { id: number, bg_color: string, bg_title: string, img_color: string, img_dir: string, content_text: string, info_link: string }[] = this.GetRequest('card/get').subscribe(
    (response: any) => { this.cardlist = response }
  )

  ullist: { id: number, title: string, text: string }[] = this.GetRequest('ullist/get').subscribe(
    (response: any) => { this.ullist = response }
  )

  artlist: { id: number, color: string, title: string, text: string, link: string }[] = this.GetRequest('proart/get').subscribe(
    (response: any) => { this.artlist = response }
  )
  bannerlist: { id: number, title: string, sub_title: string }[] = this.GetRequest('banner/get').subscribe(
    (response: any) => { this.bannerlist = response }
  )


  GetRequest(params: string): any {
    return this.http.get(this.url + params);
  }


}
