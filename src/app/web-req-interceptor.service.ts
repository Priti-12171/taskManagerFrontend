import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, catchError, throwError } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class WebReqInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
  //   const clonedRequest = this.addHeaders(req)
  //   return next.handle(clonedRequest).pipe(
  //     catchError((error: HttpErrorResponse<any>) =>{
  //       console.log(error);
      

  //     }
  //   ));
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = this.addHeaders(req)
    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) =>{

       
          this.authService.logout()

        return throwError(() => error)

      })
    )
  }
    

  private addHeaders(req: HttpRequest<any>){
    let token = this.authService.getAuthToken();
    console.log("hwjhdjw");
    //console.log(token);

    if(token){

      const headers = new HttpHeaders({
        'authorization': "bearer "+token
      });
      return req.clone({headers});
    }
    return req;
   
  }
}
