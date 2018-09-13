import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute} from '@angular/router';
import { CookieService } from '../../../../node_modules/ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errors: any = [];
  notifyMessage: string = '';
   
  constructor( private fb: FormBuilder , 
                private auth: AuthService , 
                private router: Router , 
                private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.initForm();

    this.route.params.subscribe((params)=>{
      if(params['registered']==='success'){
        this.notifyMessage = 'Registered Successfully. You can login now.'
      }
    })
  }

  initForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password:['', Validators.required]
    })
  }

  login(){
    
    this.auth.login(this.loginForm.value).subscribe(
    (token)=>{
      debugger;
      this.router.navigate(['/destinations']);
    },
    (errorResponse)=>{
      this.errors = errorResponse.error.errors;
      console.log(errorResponse.error.errors);
    }
  )
  }

}
