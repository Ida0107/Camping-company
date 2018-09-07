import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@Injectable()

export class AuthService{
    constructor (private http : HttpClient){}

    public register(userData: any): Observable<any>{
        return this.http.post('api/v1/users/register', userData)
    }
}