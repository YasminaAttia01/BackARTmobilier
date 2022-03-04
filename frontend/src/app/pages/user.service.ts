import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(user:IUser):Observable<any> {
    return this.http.post(`${environment.BASE_API_URI}/auth/register`, user) as Observable<any>;
  }

}
