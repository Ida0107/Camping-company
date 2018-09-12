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
import { AvailabilityComponent } from './availability/availability.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'availability', component: AvailabilityComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'contactus', component: ContactUsComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    AvailabilityComponent,
    VehiclesComponent,
    AboutUsComponent,
    DestinationsComponent,
    ContactUsComponent,
    
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
