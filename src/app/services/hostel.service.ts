import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HostelService {
  url;
  msg;

  constructor(public http: HttpClient) {
    this.url = 'http://localhost/webservice/public/api/';
  }

  getData(action){

    return new Promise((resolve, reject) =>{
      let headers = new HttpHeaders();
      let url = this.url + action;

      this.http
        .get(url, {headers: headers})
        .subscribe(
          res   =>{ resolve(res); }, 
          (err) =>{ reject(err); } 
        );
    });
  }

  postData(params, action){

    return new Promise((resolve, reject) =>{
      
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let url = this.url + action;
      let body = JSON.stringify(params);

      this.http
        .post(url, body, {headers: headers})
        .subscribe(
          res   =>{ resolve(res); }, 
          (err) =>{ reject(err); } 
        );
    });
  }

  setMessage(message){
    this.msg = message;
  }

  getMessage(){
    return this.msg;
  }

  ngOnInit(){
    $(".alert.alert-success").show("slow").delay(3000).slideUp(200);
  }

}
