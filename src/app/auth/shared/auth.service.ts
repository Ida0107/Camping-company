import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from "../../../../node_modules/ngx-cookie-service";
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { Router } from "../../../../node_modules/@angular/router";

const jwt = new JwtHelperService();

class DecodedToken{
    exp: number =0;
    username: string ='';
}

@Injectable()



export class AuthService{

    private decodedToken;

    constructor (private http : HttpClient , private cookie : CookieService, private router: Router){
        this.decodedToken =JSON.parse(localStorage.getItem('cam-co_meta')) || new DecodedToken;
        // console.log(localStorage.getItem('cam-co_meta'));
        // console.log(JSON.parse(localStorage.getItem('cam-co_meta')));
    }

    private saveToken(token : string) : string{
          
        this.decodedToken = jwt.decodeToken(token);
        console.log(this.decodedToken);
        console.log(JSON.stringify(this.decodedToken));
        
        localStorage.setItem('cam-co', token); 
        localStorage.setItem('cam-co_meta', JSON.stringify(this.decodedToken));
        this.cookie.set('cam-com', token, 2);
        this.cookie.set('cam-co_meta', JSON.stringify(this.decodedToken), 2)
        return token;
    }

    public register(userData: any): Observable<any>{
        return this.http.post('api/v1/users/register', userData);
    }
    public login(loginData: any): Observable<any>{
        return this.http.post('api/v1/users/auth', loginData).pipe(map((token: string) => {
            return this.saveToken(token);
        }));
    }

    public logout(){
        localStorage.removeItem('cam-co');
        localStorage.removeItem('cam-co_meta');
        this.decodedToken = new DecodedToken();
        this.router.navigate(['/login']);
    }

    public isAuthenticated(): boolean{
        return moment().isBefore(moment.unix(this.decodedToken.exp));
    }

    public getAuthToken(): string {
        debugger;
        console.log(localStorage.getItem('cam-co'))
        return localStorage.getItem('cam-co');
    }

    public getUsername() : string {
        return this.decodedToken.username;
    }


}