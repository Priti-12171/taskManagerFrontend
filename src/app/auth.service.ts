import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private webRequest: WebRequestService, private router: Router){}

  login(email: string, password: string){
    return this.webRequest.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) =>{


        this.setSession(res.body.userId, res.body.token);
        this.router.navigate(['/lists'])
        
      }
    ));
  }
  signup(email: string, password: string){
    return this.webRequest.signup(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) =>{
        this.setSession(res.body.userId, res.body.token);
        this.router.navigate(['/lists'])
        
      }
    ));
  }

  logout(){
    this.removeSession();
    this.router.navigate(['/login'])
  }

  private setSession(userId: string, accessToken: string){
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', accessToken);
  }

  private removeSession(){
    // localStorage.removeItem('userId');
    // localStorage.removeItem('token');
  }

  getAuthToken(){
    console.log(localStorage)
    return localStorage.getItem('token');
  }

}
