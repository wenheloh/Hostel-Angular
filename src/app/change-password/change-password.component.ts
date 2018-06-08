import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Gender } from '../register/register.component'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router: Router,
	private http:HttpClient,) { 
  	this.errorMsg = ""
  	this.successMsg = ""
  }

  errorMsg;
  	successMsg;
	oldPasswordModel : string = '';
	passwordModel : string = '';
	cpasswordModel : string = '';

  ngOnInit() {
  }

  validate(){
  	this.errorMsg = ""
  	this.successMsg = ""
	var valid = true

	if (		
		this.passwordModel.length == 0 ||
		this.cpasswordModel.length == 0 
	
		){
			this.errorMsg = "Please fill in all fields."
		valid = false
	}
	else if (
			this.passwordModel != this.cpasswordModel
		) {
			this.errorMsg = "Password does not match"
		valid = false
	}

	else if (this.oldPasswordModel != localStorage.getItem("password")){
		console.log(localStorage.getItem("password"))
		valid = false
		this.errorMsg = "Wrong Password."
	}

	if (valid){
		this.changePassword()
	}
  }

  changePassword() {  	

	let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	let url = "http://localhost/webservice/public/api/changePassword";
	var body = {"token":localStorage.getItem("token"),	
	"password":this.cpasswordModel,
	}

	console.log(body);

	this.http
	.post(url, body, {headers: headers})
	.subscribe(
		res   =>{ let result :any = res 

			if (result.status == "success"){		
				this.successMsg = result.message
				localStorage.setItem("password",this.cpasswordModel)
				this.route("editProfile")
			}
			else{
				this.errorMsg = result.message

			}
		}
		);
}

route(route:string){
	this.router.navigate([route])
}

}
