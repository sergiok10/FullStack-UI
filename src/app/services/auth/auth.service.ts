import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:7254/api/Users/"
  constructor(private http : HttpClient) { }

  login(userObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,userObj)
  }

  signUp(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,loginObj)
  }

}
