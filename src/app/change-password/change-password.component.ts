import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HostelService } from "../services/hostel.service";

@Component({
	selector: "app-change-password",
	templateUrl: "./change-password.component.html",
	styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent implements OnInit {

	constructor(private router: Router, private hostelService: HostelService) {
		this.errorMsg = "";
		this.successMsg = "";
	}

	errorMsg;
	successMsg;
	oldPasswordModel = "";
	passwordModel = "";
	cpasswordModel = "";

	ngOnInit() {
	}

	validate() {
		this.errorMsg = "";
		this.successMsg = "";
		let valid = true;

		if (this.passwordModel.length == 0 || this.cpasswordModel.length == 0) {
			this.errorMsg = "Please fill in all fields.";
			valid = false;
		} else if (this.passwordModel != this.cpasswordModel) {
			this.errorMsg = "Password does not match";
			valid = false;
		} else if (this.oldPasswordModel != localStorage.getItem("password")) {
			console.log(localStorage.getItem("password"));
			valid = false;
			this.errorMsg = "Wrong Password.";
		}

		if (valid) {
			this.changePassword();
		}
	}

	changePassword() {
		const params: any = {
			token: localStorage.getItem("token"),
			password: this.cpasswordModel,
		};

		this.hostelService.postData(params, "changePassword").then((result) => {
			const response: any = result;

			if (response.status === "success") {
				this.successMsg = response.message;
				localStorage.setItem("password", this.cpasswordModel);
				this.route("editProfile");
			} else {
				this.errorMsg = response.message;
			}
		});
	}

	route(route: string) {
		this.router.navigate([route]);
	}

}
