import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

	constructor(
		private router: Router,
		private http: HttpClient
	) {
		LoginComponent.errorMsg = "";
		// this.auth.logout();
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

		const headers = new HttpHeaders({"Content-Type": "application/json"});
		const url = "http://localhost/webservice/public/api/login";
		const body = {"username": this.userIdModel, "password": this.passwordModel};

		this.http
			.post(url, body, {headers: headers})
			.subscribe(
				async (res) => {
					const result: any = res;

					if (result.status === "success") {
						const data = result.data;

						localStorage.setItem("password", this.passwordModel);
						localStorage.setItem("token", data.token);
						localStorage.setItem("user_id", data.user_id);
						localStorage.setItem("user_type", data.user_type);

						if (data.user_type === "0") {
							await this.router.navigate(["/homeAdmin"]);
						} else {
							await this.router.navigate(["/home"]);
						}
					} else {
						this.staticErrorMsg = result.message;
					}
				}
			);
	}

	async route(route: string) {
		await this.router.navigate([route]);
	}
}
