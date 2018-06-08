import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { LoginModule } from '../login.module'


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Hostel Management System';
  static errorMsg;
  userIdModel : string = '';
  passwordModel : string = '';


  get staticErrorMsg() {
    return LoginComponent.errorMsg;
  }

  constructor(
      //private auth: AuthService,
      private router: Router,
    ) {
        LoginComponent.errorMsg = "";
        //this.auth.logout();
    }

  ngOnInit() {
  }  

  login() {       
     this.title = `${this.userIdModel} 
                ${this.passwordModel}`;
    /*
    this.auth.loginWithEmail(this.txtUserId.nativeElement.value, this.txtPassword.nativeElement.value).then(function(){
        LoginComponent.errorMsg = "";
        localStorage.setItem("uid","1234")
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
