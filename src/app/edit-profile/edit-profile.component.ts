import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Gender } from '../register/register.component'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router: Router,
	private http:HttpClient,) { 
  	this.errorMsg = ""
  }
  	errorMsg;
	userIdModel : string = '';
	passwordModel : string = '';
	cpasswordModel : string = '';
	matricNoModel : string = '';
	nameModel : string = '';
	contactModel : string = '';
	selectedGender : number = 0;
	genders = [Gender.Female,Gender.Male]
	genderString = ["Female","Male"]

  ngOnInit() {
  }

  register() {  	

	let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	let url = "http://localhost/webservice/public/api/editProfile";
	var body = {"username":this.userIdModel,
	"password":this.passwordModel,
	"matric_no":this.matricNoModel,
	"gender":this.selectedGender,
	"name":this.nameModel,
	"contact":this.contactModel}

	console.log(body);

	this.http
	.post(url, body, {headers: headers})
	.subscribe(
		res   =>{ let result :any = res 

			if (result.status == "success"){
				let data = result.data

				localStorage.setItem("token",data.token)
				localStorage.setItem("user_id",data.user_id)
				localStorage.setItem("user_type",data.user_type)

				let element: HTMLElement = document.getElementById('route');
				if (result.user_type == 0){
					this.router.navigate(['/homeAdmin']);
				}
				else {
					this.router.navigate(['/home']);
				}


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

onSelect(gender: number){
this.selectedGender = gender

}

}
