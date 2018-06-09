import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allApplication : Boolean = true;
  allRoomType : Boolean = false;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  toggleClass(item) {
    switch(item) {
      case 1:
       this.router.navigateByUrl("/");
        this.allApplication = true;
        this.allRoomType = false;
        break;

      case 2:
        this.router.navigateByUrl("RoomType");
        this.allApplication = false;
        this.allRoomType = true;
        break;

      default:
        this.allApplication = true;
        this.allRoomType = false;
    }
  }

}
