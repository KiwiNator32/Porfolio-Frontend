import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  appear_class:string = "hidden"

  @Input() title:string = ""
  @Input() sub_title:string = ""

  ngOnInit(): void {
    setTimeout(() => {
      this.appear_class = "visible"
    }, 500);


  }

}
