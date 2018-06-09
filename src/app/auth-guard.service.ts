import { Injectable }  from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let _url: string = "";

    state.url.split("/").forEach(element => {
        if(_url==="")
            if(element!=="")
                _url=element;
    });

    /* Allow access without login
    if(_url === "invitation")
      return true;
    */

    // Check authentication
    return this.checkLogin();
  }

  checkLogin(): boolean {
    // huh? what is security?
    /* if (localStorage.getItem('uid')) { return true; }

    // If token not found, navigate to the login page
    this.router.navigate(['/']);

    return false;
   */
   return true;
  }
}