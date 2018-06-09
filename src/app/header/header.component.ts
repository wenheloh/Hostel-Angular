import { Component, OnInit } from '@angular/core';
import { HostelService } from '../services/hostel.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routerLink: any = '';
  token;

  constructor(private router:Router,private hostelService: HostelService,private route: ActivatedRoute) {
    this.token = localStorage.getItem("token")
       
    if (localStorage.getItem("user_type") == "0")
      this.routerLink = "/homeAdmin";
    else
      this.routerLink = "/home";
  }

  ngOnInit() {
    
  }

  logout(){

    //in case of button clicked.
    if (this.token == null){
      return
    }

    this.hostelService.postData({token : localStorage.getItem("token")}, "logout").then((result) => {
      let response: any = result;

      if (response.status == "success"){
        localStorage.clear();
        this.router.navigate(['/'])
      }
    });
        
    
  }

  editProfile(){
    this.router.navigate(['/editProfile'])
  }

}
