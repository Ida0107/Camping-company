import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

private url : string;

constructor(private auth: AuthService,
              private router: Router) {}

private handleAuthState() : boolean{
    if(this.isLoginOrRegister()){
        this.router.navigate(['/destinations']);
        return false;
    }
    return true;
}

private handleNotauthState() : boolean{
    if(this.isLoginOrRegister()){
        return true;
    }
    if(this.url.includes('availability')){
    this.router.navigate(['/login']);
    return false;
    }
}

private isLoginOrRegister(): boolean{
    if(this.url.includes('login') || this.url.includes('register')){
        return true;
    }
        return false;
}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;
    if(this.auth.isAuthenticated()){
        return this.handleAuthState();
    }
    return this.handleNotauthState();
  }
}
