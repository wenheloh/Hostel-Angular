import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Hostel Management System';
  static errorMsg;

  get staticErrorMsg() {
    return LoginComponent.errorMsg;
  }

  constructor(
      //private auth: AuthService,
      private router: Router,
    ) {
        LoginComponent.errorMsg = "";
        localStorage.clear();
        //this.auth.logout();
    }

  ngOnInit() {
  }

  @ViewChild('userid') txtUserId:ElementRef;
  @ViewChild('password') txtPassword:ElementRef;

  login() {
    /*
    this.auth.loginWithEmail(this.txtUserId.nativeElement.value, this.txtPassword.nativeElement.value).then(function(){
        LoginComponent.errorMsg = "";
        let element: HTMLElement = document.getElementById('route');
        element.click();
    }).catch(function(error) {
        switch(error.code) {
            case "auth/invalid-email":
                LoginComponent.errorMsg = "Email is invalid";
                break;

            case "auth/user-disabled":
                LoginComponent.errorMsg = "This email has been disabled";
                break;

            case "auth/user-not-found":
                LoginComponent.errorMsg = "There is no user corresponding to the given email";
                break;

            case "auth/wrong-password":
                LoginComponent.errorMsg = "Wrong password";
                break;

            default:
                LoginComponent.errorMsg = "Invalid login";
                break;
        }

    });
    */
  }
}
