import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  constructor(private authService: AuthService){}
  onSignupButtonClicked(email:string, password:string){
    if(!email.includes("@")){
     window.alert("email is not valid");
    }
    if(password.length<8){
      window.alert("password should be of min 8 lenght");
    }
    else{
    this.authService.signup(email, password).subscribe((response: any)=>{
    });
  }

  }

}
