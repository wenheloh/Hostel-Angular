import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gender } from '../register/register.component';
import { HostelService } from '../services/hostel.service';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

	constructor(private router: Router, private hostelService: HostelService) {
		this.errorMsg = "";
		this.successMsg = "";
	}

	errorMsg;
	successMsg;
	matricNoModel: string = '';
	nameModel: string = '';
	contactModel: string = '';
	selectedGender: number = 0;
	genders = [Gender.Female, Gender.Male];
	genderString = ["Female", "Male"];

	ngOnInit() {
		this.hostelService.postData({ token: localStorage.getItem("token") }, "getProfile").then((result) => {
			let response: any = result;

      		if (response.status == "success"){
				let data = response.data;

				this.matricNoModel = data.matric_no;
				this.selectedGender = data.gender;
				this.nameModel = data.name;
				this.contactModel = data.contact;
			}
		});
	}
	
	validate() {
		this.errorMsg = "";
		this.successMsg = "";
		var valid = true;

		if (
			this.contactModel.length == 0 ||
			this.nameModel.length == 0 ||
			this.contactModel.length == 0
		) {
			this.errorMsg = "Please fill in all fields.";
			valid = false;
		}

		if (valid) {
			this.editProfile()
		}
	}

	editProfile() {
		let params: any = {
			token: localStorage.getItem("token"),
			gender: this.selectedGender,
			name: this.nameModel,
			contact: this.contactModel
		}

		this.hostelService.postData(params, "editProfile").then((result) => {
			let response: any = result;

      		if (response.status == "success"){
				this.successMsg = response.message;
			}
			else {
				this.errorMsg = response.message;
			}
		});
	}

	route(route: string) {
		this.router.navigate([route])
	}

	onSelect(gender: number) {
		this.selectedGender = gender

	}

}
