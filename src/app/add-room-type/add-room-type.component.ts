import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.css']
})
export class AddRoomTypeComponent implements OnInit {

  form: FormGroup;
  apiURL = "http://localhost/webservice/public/";
  selectedImage : File;

  constructor(private http: HttpClient, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      image: [null],
      roomtype_name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      available_room_num: [null, Validators.required]
      })

  }

  onFileChanged(event) {
    this.selectedImage = event.target.files[0];
  }

  addRoomType() {
    if (this.form.valid) {
      new Promise((resolve, reject) => {
        let roomtype_name = this.form.get("roomtype_name").value;
        let description = this.form.get("description").value;
        let price = this.form.get("price").value;
        let available_room_num = this.form.get("available_room_num").value;

        let postData = new FormData();

        postData.append("token", "2481a9eb342c1749dd4f1051386c3419");
        postData.append("status", "1");
        postData.append("roomtype_name", roomtype_name);
        postData.append("description", description);
        postData.append("price", price);
        postData.append("available_room_num", available_room_num);
        postData.append("file", this.selectedImage);

        let url = this.apiURL + "api/addRoomType";

        this.http
          .post(url, postData)
          .subscribe(
            res => { resolve(res); },
            (err) => { reject(err) }
          );
      }).then((result) => {
        alert("Successfully added!");
        localStorage.removeItem("currentRoomType");
        this.router.navigate(['/RoomType']);
      });
    } else {
      // Revalidate all fields by iterate through all of them
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }
}
