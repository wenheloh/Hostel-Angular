import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  title = 'Hostel Management System';
  static errorMsg;
  userIdModel: string = '';
  passwordModel: string = '';


  get staticErrorMsg() {
    return LoginComponent.errorMsg;
  }

  set staticErrorMsg(msg) {
    LoginComponent.errorMsg = msg;
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    LoginComponent.errorMsg = "";
    //this.auth.logout();
  }

  ngOnInit() {
  }

  login() {
    if (this.userIdModel == "" || this.passwordModel == "") {
      this.staticErrorMsg = "Please enter user ID or Password."
      return
    }
    else {
      this.staticErrorMsg = ""
    }

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let url = "http://localhost/webservice/public/api/login";
    var body = { "username": this.userIdModel, "password": this.passwordModel }

    console.log(body);

    this.http
      .post(url, body, { headers: headers })
      .subscribe(
        res => {
          let result: any = res

          if (result.status == "success") {
            let data = result.data

            localStorage.setItem("password", this.passwordModel)
            localStorage.setItem("token", data.token)
            localStorage.setItem("user_id", data.user_id)
            localStorage.setItem("user_type", data.user_type)

            let element: HTMLElement = document.getElementById('route');
            if (data.user_type == "0") {
              this.router.navigate(['/homeAdmin']);
            }
            else {
              this.router.navigate(['/home']);
            }


          }
          else {
            this.staticErrorMsg = result.message

          }
        }
      );
  }

  route(route: string) {
    this.router.navigate([route]);
  }



}
