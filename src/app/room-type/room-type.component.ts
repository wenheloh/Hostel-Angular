import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
	selector: "app-room-type",
	templateUrl: "./room-type.component.html",
	styleUrls: ["./room-type.component.css"]
})
export class RoomTypeComponent implements OnInit {

	apiURL = "http://localhost/webservice/public/";
	roomTypeList: Array<any> = [];

	constructor(private http: HttpClient, private router: Router) {
	}

	ngOnInit() {
		this.retrieveRoomType();
	}

	retrieveRoomType() {
		new Promise((resolve, reject) => {

			const credential = {"token": localStorage.getItem("token")};
			const headers = new HttpHeaders({"Content-Type": "application/json"});
			const url = this.apiURL + "api/getAllRoomTypes";
			const body = JSON.stringify(credential);

			this.http
				.post(url, body, {headers: headers})
				.subscribe(
					res => {
						resolve(res);
					},
					(err) => {
						reject(err);
					}
				);
		}).then((result) => {
			const roomTypeJSON: any = result;

			roomTypeJSON.data.forEach(element => {
				this.roomTypeList.push(element);
			});

		});
	}

	editRoom(index) {
		localStorage.setItem("currentRoomType", JSON.stringify(this.roomTypeList[index]));
		this.router.navigate(["/EditRoomType"]);
	}

	disableRoom(id, index) {
		if (confirm("Are you sure you want to disable this room type? This move is not revertable.")) {
			new Promise((resolve, reject) => {

				const credential = {
					"token": localStorage.getItem("token"),
					"roomtype_id": id
				};

				const headers = new HttpHeaders({"Content-Type": "application/json"});
				const url = this.apiURL + "api/disableRoomType";
				const body = JSON.stringify(credential);

				this.http
					.post(url, body, {headers: headers})
					.subscribe(
						res => {
							resolve(res);
						},
						(err) => {
							reject(err);
						}
					);
			}).then((result) => {
				alert("Successfully deleted item. ");
				this.roomTypeList[index].status = "0";
			});
		}
	}
}
