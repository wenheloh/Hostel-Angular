import { Component, OnInit } from "@angular/core";
import { HostelService } from "../../services/hostel.service";
import { Router } from "@angular/router";
import { WhitelistedDirectory } from "../../app/auth-guard.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
	show = true;
	routerLink = "";
	token: string;

	constructor(private router: Router, private hostelService: HostelService) {
		if (Object.values(WhitelistedDirectory).includes(window.location.pathname as unknown as WhitelistedDirectory)) {
			this.show = false;
		}

		this.token = localStorage.getItem("token");

		if (localStorage.getItem("user_type") === "0") {
			this.routerLink = "/homeAdmin";
		} else {
			this.routerLink = "/home";
		}
	}

	ngOnInit() {

	}

	async logout() {
		if (this.token === null) {
			return;
		}

		const response = await this.hostelService.postData({ token: this.token }, "logout");
		if (response.status === "success") {
			localStorage.clear();
			await this.router.navigate(["/"]);
		}
	}

	async editProfile() {
		await this.router.navigate(["/editProfile"]);
	}

}
