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
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './auth/shared/auth.guard';
import { LinksModule } from './links/links.module';

// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokenInterceptor} from './auth/shared/token.interceptor';



const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contactus', component: ContactUsComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BsDatepickerModule.forRoot(),
    AuthModule,
    RouterModule.forRoot(routes),
    LinksModule
    
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
