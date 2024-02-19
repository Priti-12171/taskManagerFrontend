import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL;

constructor(private http: HttpClient) { 
      this.ROOT_URL = 'http://localhost:3000';
    }
getApi(uri: string){
    return this.http.get(this.ROOT_URL.concat(uri));
    }

createApi(uri: string, payload: Object){
  console.log(this.ROOT_URL.concat(uri));
    return this.http.post(this.ROOT_URL.concat(uri), payload);
    }

updateApi(uri: string, payload: Object){
  console.log(this.ROOT_URL.concat(uri));
    return this.http.put(this.ROOT_URL.concat(uri), payload);
 }

delete(uri: string){
  console.log("preparing for delere");
    return this.http.delete(this.ROOT_URL.concat(uri));
}

login(email: string, password: string){
  return this.http.post(this.ROOT_URL.concat("/users/login"), {email, password},
  {observe:'response'}
  );
}
signup(email: string, password: string){
  return this.http.post(this.ROOT_URL.concat("/users/signup"), {email, password},
  {observe:'response'}
  );
}

}
