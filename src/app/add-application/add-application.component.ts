import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostelService } from '../services/hostel.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {
  roomTypes: any[];
  selectedTypeID: number = 0;

  constructor(private router: Router, private hostelService: HostelService) {
    
    this.hostelService.postData({"token" : localStorage.getItem("token")}, "getAllRoomTypes").then((result) => {
      let response: any = result;
      
      if (response.status == "success"){
        this.roomTypes = response.data;

        this.roomTypes.forEach(function(type){
          if (type.image){
            type.image = "./assets/img/" + type.image;
          }
        });
      }
    });
  }

  ngOnInit() {
  }

  selectType(i){
    this.selectedTypeID = this.roomTypes[i].roomtype_id;
  }

  apply(){
    if (this.roomTypes.length == 1)
      this.selectedTypeID = this.roomTypes[0].roomtype_id;

    let params: any = {
      token : localStorage.getItem("token"),
      roomtype_id: this.selectedTypeID
    }

    this.hostelService.postData(params, "addApplication").then((result) => {
      let response: any = result;

      if (response.status == "success"){
        this.router.navigate(['home']);
        this.hostelService.setMessage('Apply successfully.');
      }
      else{
        alert(response.message);
      }
    });
  }

}
