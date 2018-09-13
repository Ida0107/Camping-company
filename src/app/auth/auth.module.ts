import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MomentModule } from 'ngx-moment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { Routes, RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { TokenInterceptor} from './shared/token.interceptor';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate:[AuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]}
]
@NgModule({
  declarations: [
    
    RegisterComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MomentModule
    
   
  ],
  providers: [
      AuthService,
      CookieService,
      AuthGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi : true,
      }
    
  ],
  
})
export class AuthModule { }
