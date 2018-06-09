import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routerLink: any = '';

  constructor() {
    if (localStorage.getItem("user_type") == "0")
      this.routerLink = "/homeAdmin";
    else
      this.routerLink = "/home";
  }

  ngOnInit() {
  }

}
