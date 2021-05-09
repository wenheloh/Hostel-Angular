import { Component, OnInit } from "@angular/core";
import { HostelService } from "../services/hostel.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
	displayBtn = true;
	applications: any;
	successMsg: any = "";

	constructor(private route: ActivatedRoute, private hostelService: HostelService) {

		this.hostelService.postData({token: localStorage.getItem("token")}, "getMyApplications").then((result) => {
			const response: any = result;

			if (response.status === "success") {
				this.applications = response.data.reverse();

				// Cannot apply if got pending or approved application
				if (this.applications.findIndex(x => x.status === 0 || x.status === 1) > -1) {
					this.displayBtn = false;
				}
			}
		});

		this.successMsg = this.hostelService.getMessage();

	}

	ngOnInit() {
	}

}
