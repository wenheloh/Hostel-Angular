import { Component, OnInit } from "@angular/core";
import { HostelService } from "../../services/hostel.service";

@Component({
	selector: "app-admin-home",
	templateUrl: "./admin-home.component.html",
	styleUrls: ["./admin-home.component.css"]
})
export class AdminHomeComponent implements OnInit {
	applications: any;

	constructor(private hostelService: HostelService) {
		this.getAllApplications();
	}

	ngOnInit() {
	}

	getAllApplications() {
		this.hostelService.postData({token: localStorage.getItem("token")}, "getAllApplications").then((result) => {
			const response: any = result;

			if (response.status === "success") {
				this.applications = response.data;
			}
		});
	}

	approve(application_id) {
		const params: any = {
			application_id: application_id,
			token: localStorage.getItem("token")
		};

		this.hostelService.postData(params, "approveApplication").then((result) => {
			const response: any = result;

			if (response.status === "success") {
				this.getAllApplications();
				alert("Successfully approve the application.");
			} else {
				alert(response.error);
			}
		});
	}

	reject(application_id) {
		const params: any = {
			application_id: application_id,
			token: localStorage.getItem("token")
		};

		this.hostelService.postData(params, "rejectApplication").then((result) => {
			const response: any = result;

			if (response.status === "success") {
				this.getAllApplications();
				alert("Successfully reject the application.");
			} else {
				alert(response.error);
			}
		});
	}

}
