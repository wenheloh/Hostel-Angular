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
  	this.successMsg = ""
 
  }
  	errorMsg;
  	successMsg;	
	matricNoModel : string = '';
	nameModel : string = '';
	contactModel : string = '';
	selectedGender : number = 0;
	genders = [Gender.Female,Gender.Male]
	genderString = ["Female","Male"]

  ngOnInit() {
	let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	let url = "http://localhost/webservice/public/api/getProfile";
	var body = {"token":localStorage.getItem("token")}

	console.log(body);

	this.http
	.post(url, body, {headers: headers})
	.subscribe(
		res   =>{ let result :any = res 

			if (result.status == "success"){
				let data = result.data
				this.matricNoModel = data.matric_no
				this.selectedGender = data.gender
				this.nameModel = data.name
				this.contactModel = data.contact						
			}
			
		}
		);

  }
  validate(){
  	this.errorMsg = ""
  	this.successMsg = ""
	var valid = true

	if (
		this.contactModel.length == 0 ||		
		this.nameModel.length == 0 ||
		this.contactModel.length == 0 
		){
			this.errorMsg = "Please fill in all fields."
		valid = false
	}
		
	if (valid){
		 this.editProfile()
	}
  }

  editProfile() {  	

	let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	let url = "http://localhost/webservice/public/api/editProfile";
	var body = {"token":localStorage.getItem("token"),	
	"gender":this.selectedGender,
	"name":this.nameModel,
	"contact":this.contactModel}

	console.log(body);

	this.http
	.post(url, body, {headers: headers})
	.subscribe(
		res   =>{ let result :any = res 

			if (result.status == "success"){		
				this.successMsg = result.message

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
