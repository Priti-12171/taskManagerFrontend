import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private authService: AuthService){}

  onLoginButtonClicked(email:string, password:string){
    this.authService.login(email, password).subscribe((response: any)=>{
    });

  }

}
