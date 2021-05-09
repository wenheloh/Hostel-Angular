import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
	selector: "app-edit-room-type",
	templateUrl: "./edit-room-type.component.html",
	styleUrls: ["./edit-room-type.component.css"]
})
export class EditRoomTypeComponent implements OnInit {

	apiURL = "http://localhost/webservice/public/";
	roomType;
	form: FormGroup;
	selectedImage: File;

	constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
		const strRoom = localStorage.getItem("currentRoomType");
		this.roomType = JSON.parse(strRoom);
	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			image: [null],
			roomtype_name: [null, Validators.required],
			description: [null, Validators.required],
			price: [null, Validators.required],
			available_room_num: [null, Validators.required],
		});

		this.form.patchValue({
			roomtype_name: this.roomType.roomtype_name,
			description: this.roomType.description,
			price: this.roomType.price,
			available_room_num: this.roomType.available_room_num
		});
	}

	onFileChanged(event) {
		this.selectedImage = event.target.files[0];
	}

	updateRoomType() {
		if (this.form.valid) {
			new Promise((resolve, reject) => {
				const roomtype_id = this.roomType.roomtype_id;
				const roomtype_name = this.form.get("roomtype_name").value;
				const description = this.form.get("description").value;
				const price = this.form.get("price").value;
				const available_room_num = this.form.get("available_room_num").value;

				const postData = new FormData();

				postData.append("token", localStorage.getItem("token"));
				postData.append("status", "1");
				postData.append("roomtype_id", roomtype_id);
				postData.append("roomtype_name", roomtype_name);
				postData.append("description", description);
				postData.append("price", price);
				postData.append("available_room_num", available_room_num);
				postData.append("file", this.selectedImage);

				const url = this.apiURL + "api/updateRoomType";

				this.http
					.post(url, postData)
					.subscribe(
						res => {
							resolve(res);
						},
						(err) => {
							reject(err);
						}
					);
			}).then((result) => {
				alert("Successfully updated!");
				localStorage.removeItem("currentRoomType");
				this.router.navigate(["/RoomType"]);
			});
		} else {
			// Revalidate all fields by iterate through all of them
			Object.keys(this.form.controls).forEach(field => {
				const control = this.form.get(field);
				control.markAsTouched({onlySelf: true});
			});
		}
	}

	isFieldValid(field: string) {
		return !this.form.get(field).valid;
	}

}
