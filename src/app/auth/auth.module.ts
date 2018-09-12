import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MomentModule } from 'ngx-moment';


import { Routes, RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
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
      CookieService
  ],
  
})
export class AuthModule { }
