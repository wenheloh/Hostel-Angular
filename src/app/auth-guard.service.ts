import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

enum WhitelistedDirectory {
	LOGIN = "login",
	REGISTER = "register",
	FORGOT_PASSWORD = "forgot-password",
	ROOT = ""
}

enum ProtectedDirectory {
	ADMIN_HOME = "home-admin",
	ADD_ROOM_TYPE = "add-room-type",
	EDIT_ROOM_TYPE = "edit-room-type",
	ROOM_TYPE = "room-type"
}

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router) {
	}

	async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		const url = state.url.split("/").reverse()[0];
		return await this.checkLogin(url);
	}

	async checkLogin(url: string): Promise<boolean> {
		switch (url) {
			case WhitelistedDirectory.ROOT:
			case WhitelistedDirectory.LOGIN:
			case WhitelistedDirectory.REGISTER:
			case WhitelistedDirectory.FORGOT_PASSWORD:
				if (localStorage.getItem("token") === null) {
					return true;
				}
				if (localStorage.getItem("user_type") === "1") {
					return await this.router.navigate(["/home"]);
				}
				return await this.router.navigate(["/home-admin"]);

			case ProtectedDirectory.ADMIN_HOME:
			case ProtectedDirectory.ROOM_TYPE:
			case ProtectedDirectory.ADD_ROOM_TYPE:
			case ProtectedDirectory.EDIT_ROOM_TYPE:
				if (localStorage.getItem("token") === null) {
					return await this.router.navigate([""]);
				}
				if (localStorage.getItem("user_type") === "1") {
					return await this.router.navigate(["/home"]);
				}
				return true;

			default:
				if (localStorage.getItem("token") === null) {
					return await this.router.navigate([""]);
				} else {
					return true;
				}
		}
	}
}
