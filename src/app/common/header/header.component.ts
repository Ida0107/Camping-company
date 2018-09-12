import { Component } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../auth/shared/auth.service';


@Component({
  selector: 'cc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Camping-company';
  faQuestionCircle = faQuestionCircle;

  constructor( private auth : AuthService){}

  logout(){
    this.auth.logout();
  }
}
