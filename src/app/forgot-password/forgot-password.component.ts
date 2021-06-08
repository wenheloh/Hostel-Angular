import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HostelService } from "../../services/hostel.service";

@Component({
	selector: "app-forgot-password",
	templateUrl: "./forgot-password.component.html",
	styleUrls: ["./forgot-password.component.css"]
})
export class ForgotPasswordComponent implements OnInit {

	errorMsg;
	successMsg;
	userIdModel = "";

	get staticErrorMsg() {
		return this.errorMsg;
	}

	set staticErrorMsg(msg) {
		this.errorMsg = msg;
	}

	constructor(private router: Router, private hostelService: HostelService) {
		this.errorMsg = "";
	}

	ngOnInit() {
	}

	resetPassword() {
		this.staticErrorMsg = "";
		this.successMsg = "";

		if (this.userIdModel === "") {
			this.staticErrorMsg = "Please enter user ID.";
			return;
		}

		this.hostelService.postData({username: this.userIdModel}, "resetPassword").then((result) => {
			const response: any = result;

			if (response.status === "success") {
				this.successMsg = response.message;
			} else {
				this.staticErrorMsg = response.message;
			}
		});
	}

	async route(route: string) {
		await this.router.navigate([route]);
	}


}
