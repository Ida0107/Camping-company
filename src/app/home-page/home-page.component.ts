import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@ViewChildren('video') 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 

  constructor( private router: Router ) { }
  
   ngOnInit() {
    
   }
   

}
