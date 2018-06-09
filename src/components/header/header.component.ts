import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user_type: Boolean = false;
  token: Boolean = false;
  allApplication: Boolean = true;
  allRoomType: Boolean = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.user_type = localStorage.getItem("user_type") == "0" ? true : false;
    this.token = localStorage.getItem("token") != null ? true : false;
  }

  toggleClass(item) {
    switch (item) {
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

  logout() {

    let url = "http://localhost/webservice/public/api/logout";
    let body = { token: localStorage.getItem("token") };
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post(url, body, { headers: headers })
      .subscribe(
        res => {
          let result: any = res

          if (result.status == "success") {
            alert("Successfully logout.");
            this.token = false;
            this.user_type = false;
            localStorage.clear();
            this.router.navigate(['/']);
          }

        }
      );
  }

}
