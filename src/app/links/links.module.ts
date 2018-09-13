import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AvailabilityComponent } from './availability/availability.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { AuthGuard } from '../auth/shared/auth.guard';


const routes: Routes = [
    {path: 'availability', component: AvailabilityComponent , canActivate : [AuthGuard]},
    {path: 'vehicles', component: VehiclesComponent},
    {path: 'destinations', component: DestinationsComponent},

]
@NgModule({
  declarations: [
    AvailabilityComponent,
    VehiclesComponent ,
    DestinationsComponent
    
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
   
    
   
  ],
  providers: [
    
  ],
  
})
export class LinksModule { }
