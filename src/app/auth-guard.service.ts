import { Injectable }  from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let _url: string = "";

    state.url.split("/").forEach(element => {
      if(_url==="")
        if(element!==""){
          _url=element;                
        }
      });  

    // Check authentication
    return this.checkLogin(_url);
  }
  checkLogin(url : String): boolean {

    if (
      url == 'login'||
      url == 'register'||
      url == 'forgotPassword'||
      url == ''
      )
    {
      if (localStorage.getItem("token") == null){
        return true
      }
      else{
        if (localStorage.getItem("user_type") == "1"){
          this.router.navigate(['/home'])
        }
        else{
          this.router.navigate(['/homeAdmin'])
        }


      }
    }
    else if (
      url == 'homeAdmin'||
      url == 'EditRoomType'||
      url == 'AddRoomType'||
      url == 'RoomType'
      )
    {
      if (localStorage.getItem("token") == null){
        this.router.navigate([''])
        return false
      }
      else{
        if (localStorage.getItem("user_type") == "1"){
          this.router.navigate(['/home'])
          return false
        }
        else{
          return true
        }


      }
    }
    else {
      if (localStorage.getItem("token") == null){
        this.router.navigate([''])
        return false
      }
      else{
        return true
              }
    }
  }
  
}
