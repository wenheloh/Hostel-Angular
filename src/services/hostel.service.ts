import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HostelService {
	url;
	msg;

	constructor(public http: HttpClient) {
		this.url = "http://localhost/webservice/public/api/";
	}

	getData(action): Promise<any> {
		return new Promise((resolve, reject) => {
			const headers = new HttpHeaders();
			const url = this.url + action;

			this.http
				.get(url, {headers: headers})
				.subscribe(
					res => {
						resolve(res);
					},
					(err) => {
						reject(err);
					}
				);
		});
	}

	postData(params, action): Promise<any> {
		return new Promise((resolve, reject) => {
			const headers = new HttpHeaders({"Content-Type": "application/json"});
			const url = this.url + action;
			const body = JSON.stringify(params);

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
		});
	}

	setMessage(message) {
		this.msg = message;
	}

	getMessage() {
		return this.msg;
	}
}
