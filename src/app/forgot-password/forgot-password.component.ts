import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

 	errorMsg;
 	successMsg;
  userIdModel : string = '';

get staticErrorMsg() {
    return this.errorMsg;
  }

  set staticErrorMsg(msg) {
    this.errorMsg = msg;
  }
  constructor( private router: Router,
      private http:HttpClient,) { 
  	this.errorMsg = ""}

  ngOnInit() {
  }

  resetPassword() {  
  	 this.staticErrorMsg = ""
        this.successMsg = ""
      if( this.userIdModel == ""){
        this.staticErrorMsg = "Please enter user ID."
        return
      }
     

       

        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let url = "http://localhost/webservice/public/api/resetPassword";
        var body = {"username":this.userIdModel}
               
        console.log(body);

        this.http
        .post(url, body, {headers: headers})
        .subscribe(
          res   =>{ let result :any = res 

            if (result.status == "success"){
              let data = result.data            
             this.successMsg = result.message
           }
            else{
              this.staticErrorMsg = result.message

            }
          }
          );
      }
route(route:string){
        this.router.navigate([route]);
      }
      

}
