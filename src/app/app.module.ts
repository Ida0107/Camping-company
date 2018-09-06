import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthModule } from './auth/auth.module';



const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BsDatepickerModule.forRoot(),
    AuthModule,
    RouterModule.forRoot(routes),
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
