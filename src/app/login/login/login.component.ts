import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HostelService } from "../../services/hostel.service";

@Component({
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	static errorMsg;
	title = "Hostel Management System";
	userIdModel = "";
	passwordModel = "";

	get staticErrorMsg() {
		return LoginComponent.errorMsg;
	}

	set staticErrorMsg(msg) {
		LoginComponent.errorMsg = msg;
	}

	constructor(private router: Router, private hostelService: HostelService) {
		LoginComponent.errorMsg = "";
	}

	ngOnInit() {
	}

	login() {
		if (this.userIdModel === "" || this.passwordModel === "") {
			this.staticErrorMsg = "Please enter user ID or Password.";
			return;
		} else {
			this.staticErrorMsg = "";
		}

		const params: any = {
			username: this.userIdModel,
			password: this.passwordModel
		};

		this.hostelService.postData(params, "login").then((result) => {
			const response: any = result;

			if (response.status === "success") {
				const data = response.data;

				localStorage.setItem("password", this.passwordModel);
				localStorage.setItem("token", data.token);
				localStorage.setItem("user_id", data.user_id);
				localStorage.setItem("user_type", data.user_type);

				const element: HTMLElement = document.getElementById("route");
				if (data.user_type === "0") {
					this.router.navigate(["/homeAdmin"]);
				} else {
					this.router.navigate(["/home"]);
				}
			} else {
				this.staticErrorMsg = response.message;
			}
		});
	}

	route(route: string) {
		this.router.navigate([route]);
	}
}
